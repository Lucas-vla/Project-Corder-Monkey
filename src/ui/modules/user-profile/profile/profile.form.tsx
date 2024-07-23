import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";

interface Props {
    form: FormsType;
  }

export const ProfileForm = ({form}: Props) => {

    const { register, errors, isLoading, onSubmit, handleSubmit } = form // destructuring pour eviter de faire des .register . errors .isLoading etc...

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">

            <div className="grid grid-cols-12 gap-6"> 
                <div className="col-span-6 space-y-4"></div>
                <div className="col-span-6 space-y-4"></div>
            </div>

            <div className="flex justify-end">
                <Button 
                isLoading={isLoading}
                type="submit"
                >
                    Enregistrer
                </Button>
            </div>
        </form>
    )
}