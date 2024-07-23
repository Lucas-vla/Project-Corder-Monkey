import { FormsType } from "@/types/forms";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
  form: FormsType;
}

export const ProfileStepForm = ({ form }: Props) => {
  const { register, errors, isLoading } = form;
  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        label="Nom d'utilisateur"
        isLoading={isLoading}
        placeholder="John Doe"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ton pseudo !"
        id="displayName"
      />
      <Input
        label="Expertise"
        isLoading={isLoading}
        placeholder="Développeur front-end React ..."
        type="text"
        register={register}
        errors={errors}
        errorMsg="Renseigne ton expertise !"
        id="expertise"
      />
      <Textarea
        label="Biographie"
        isLoading={isLoading}
        placeholder="Parle nous de toi et ton parcours !"
        rows={5}
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ !"
        id="biography"
        required={false}
      />
    </form>
  );
};
