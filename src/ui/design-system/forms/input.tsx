import clsx from "clsx";
import { Typography } from "../typography/typograpy";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
  label?: string;
}

export const Input = ({
  // Rappel: Valeur par defaut si non renseignées.
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  required = true,
  isAutoCompleted = false,
  label,
}: Props) => {
  console.log("errors", errors[id]); // le fait de mettre errors[id] permet d'afficher précisement dans la console les erreurs avec le message que l'on a renseigné ou si c'est "required"
  return (
    <div className="space-y-2">
      {label && (
        <Typography 
        variant="caption4"
        component="div"
        theme={errors[id] ? "danger" : "gray-600"}
        >
          {label}
        </Typography>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
            isLoading && "cursor-not-allowed",
            // ici ci un erreur survient le placeholder l'indiquera en apparence rouge.
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary "
        )}
        disabled={isLoading} // le disabled={isLoading} permet de griser et de rendre inutilisable l'input lors du chargement ou l'envoie des données pour éviter que l'utilisateur clique plusieurs fois dessus.
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        //ici on va faire apparaitre un message d'erreur en dessous de l'inpu concerné.
            <Typography variant="caption4" component="div" theme="danger" className="pl-2"> 
                {errors[id]?.message}
            </Typography>
      )}
    </div>
  );
};
