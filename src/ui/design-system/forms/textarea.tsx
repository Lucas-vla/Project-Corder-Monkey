import clsx from "clsx";
import { Typography } from "../typography/typograpy";
import { disableNetwork } from "firebase/firestore";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows? : number; // ça sert à definir le nombre de ligne du textinput (sa taille)
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    label?: string;
}

export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted = false,
    label,
}: Props) => {
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
        <textarea
            rows={rows}
            placeholder={placeholder}
            className={clsx(
                isLoading ? " bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white",
                // ici ci un erreur survient le placeholder l'indiquera en apparence rouge.
              errors[id]
                ? "placeholder-alert-danger text-alert-danger"
                : "placeholder-gray-600",
                "w-full p-4 font-light border rounded focus:ring-1 focus:outline-none focus:ring-primary border-gray-400"
            )}
            disabled={isLoading}
            {...register(id, {
                required: {
                    value: required,
                    message: errorMsg,
                }
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
    )
}