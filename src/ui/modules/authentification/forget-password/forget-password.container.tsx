import { ForgetPasswordFormFieldType, LoginFormFieldType } from "@/types/forms";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";
import { useToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {

  const router= useRouter()
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const {
    // ci-dessous sont des élements de react-hook-form
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldType>(); //on indique ici à react-hook-form que l'on travaille sur RegisterFormFieldType et que donc on travaille strictement sur ce qu'il peut recevoir à savoir : email, password, how_did_hear.

  const handleResetPassword = async ({
    email,
  }: ForgetPasswordFormFieldType) => {
    const { error } = await sendEmailToResetPassword(email);

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
      
    }

    toast.success(`Un E-mail à été envoyé à l'adresse ${email} `)
    setIsLoading(false)
    reset();
    router.push("/connexion") // on redirige vers la page de connexion à la fin de l'execution de ce code
  };
  // on créer une fonction pour que lorsque l'on déclenche l'envoie du formulaire cette fonction s'effectuera.
  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };

  return (
    <ForgetPasswordView
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
