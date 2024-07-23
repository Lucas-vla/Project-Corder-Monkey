import { LoginFormFieldType } from "@/types/forms";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //1- ici on écoute si l'utilisateur est connecté, on lui passe "auth", on récupère user.
      if (user) {
        //2- si on a user
        console.log("user", user);

        const uid = user.uid; //3- on va chercher son uid
      } else {
        console.log("tu n'est pas connecté");
      }
    });
  }, []);

  const {
    // ci-dessous sont des élements de react-hook-form
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldType>(); //on indique ici à react-hook-form que l'on travaille sur RegisterFormFieldType et que donc on travaille strictement sur ce qu'il peut recevoir à savoir : email, password, how_did_hear.

  const handleSignInUser = async ({ email, password }: LoginFormFieldType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur l'application !");
    setIsLoading(false);
    reset(); //le reset permet de remettre la page a son état initial en cas de succès dans ce cas ici.
    router.push("/mon-espace");
  };
  // on créer une fonction pour que lorsque l'on déclenche l'envoie du formulaire cette fonction s'effectuera.
  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };

  return (
    <LoginView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
