import { useAuth } from "@/context/AuthUserContext"
import { GUEST, REGISTERED } from "@/lib/session-status";
import { sessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner"
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: sessionStatusTypes
}

export const Session = ({children, sessionStatus}: Props) => {
    const router = useRouter()
    const { authUserIsLoading, authUser} = useAuth();
    
    const onBoardingIsCompleted = authUser?.userDocument?.onBoardingIsCompleted

    const shouldRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser &&
            !onBoardingIsCompleted &&
            router.asPath !== "/onboarding"
        )
    }

    const shouldNotRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser &&
            onBoardingIsCompleted &&
            router.asPath === "/onboarding"
        )
    }

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />
    }

    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />
    }

// on a Typé de sorte a ce que si le user est registered on lui retourne un certaine page et si il est en invité une autre
    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>
        } else {
            router.push("/mon-espace")
        }
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>
        } else {
            router.push("/connexion")
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>
    }
    // si on est en train de charger on retourne le spinner
    return <ScreenSpinner/>

}