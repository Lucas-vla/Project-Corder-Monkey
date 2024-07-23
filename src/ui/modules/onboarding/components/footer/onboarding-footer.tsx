import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";

interface Props {
    next?: () => void;
    previous?: () => void;
    isFirstStep?: () => boolean;
    isFinalStep?: () => boolean;
    isLoading?: boolean
}

export const OnboardingFooter = ({
    next,
    previous,
    isFirstStep,
    isFinalStep,
    isLoading,
}: Props) => {
    let actionButtonTitle: string;

    if (isFirstStep && isFirstStep()) { // Ici on va modifier le titre du bouton selon l'étape ou l'on est dans le onboarding, donc "Si on est a l'étape 1, on joue la fonction()"
        actionButtonTitle = "Démarrer"  // Alors le titre du bouton sera "Demarrer"
    } else if (isFinalStep && isFinalStep()) { // Et si c'est létape finale
        actionButtonTitle = "Terminer"  // il sera "Terminer"
    } else { // si c'est ni l'un ni l'autre
        actionButtonTitle = "Continuer" // il sera "Continuer"
    } //Moi je trouve ça hyper stylé
    return (
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
            <div className={clsx(
                previous && !next && "justify-start",
                !previous && next && "justify-end",
                previous && next && "justify-between",
                "flex items-center gap-5"
            )}>
                {previous && (
                    <Button
                    disabled={isLoading} // ici on dit au boutton de se désactiver dès lors qu'on est en chargement
                    variant={!isLoading ? "outline" : "disabled"}
                    action={previous}
                    >
                        Retour
                    </Button>
                )}

                {next && (
                    <Button isLoading={isLoading} action={next}>
                        {actionButtonTitle}
                    </Button>
                )}
            </div>
        </div>

    )
}