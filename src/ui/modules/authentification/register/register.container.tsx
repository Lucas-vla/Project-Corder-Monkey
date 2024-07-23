import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldType } from "@/types/forms";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  }); // ici grace à "initial" qui de base est parametrer sur "false" (voir use-toggle.tsx), on peut lui indiquer que sont état initial est true.

  const {
    // ci-dessous sont des élements de react-hook-form
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldType>(); //on indique ici à react-hook-form que l'on travaille sur RegisterFormFieldType et que donc on travaille strictement sur ce qu'il peut recevoir à savoir : email, password, how_did_hear.

  const handleCreateUserDocument = async (
    collectionName: string,
    documentId: string,
    document: object
  ) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      documentId,
      document
    );
    if (error) {
      toast.error(error.message)
      setIsLoading(false) // ici si on a une erreur on arrête de load
      return;
    }
    toast.success("Bienvenue sur l'app !");
    setIsLoading(false);
    reset();
    sendEmailVerificationProcedure()
  };

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFieldType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }

    const userDocumentData = {
        email: email,
        how_did_hear: how_did_hear,
        uid: data.uid,
        creation_date: new Date(),

    }

    handleCreateUserDocument("users", data.uid, userDocumentData) // ici on créer une collection "users" avec le data.uid qui provient de l'authentication et on lui transmet les données, ce qui crée notre utilisateur
    
  };

  // on créer une fonction pour que lorsque l'on déclenche l'envoie du formulaire cette fonction s'effectuera.
  const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);

    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimun 6 caractères",
      });
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <>
      {/* <Button action={toggle}>Click Me</Button> (boutton de test pour expliquer le useToggle) */}
      <RegisterView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
