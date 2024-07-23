import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { Container } from "../container/container";
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { sessionStatusTypes } from "@/types/session-status-types";
import { CallToActionView } from "@/ui/design-system/call-to-action.view.tsx/call-to-action.view";
import { CallsToActionSideBarContribution } from "../calls-to-action/calls-to-action-sidebar-contribution";

interface Props {
    children: React.ReactNode // Children est une Porps React ce n'est pas un nom crée de toute pièce, voir doc.
    isDisplayBreadcrumbs?: Boolean;
    withSideBar?: boolean;
    sessionStatus?: sessionStatusTypes;
}
export const Layout = ({
    children, 
    isDisplayBreadcrumbs = true, 
    withSideBar,
    sessionStatus,
}: Props) => {

    let view: React.ReactElement = <></>;

    if(withSideBar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3 space-y-8">
                        <UserAccountNavigation />
                        <CallsToActionSideBarContribution />
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        )
    } else {
        view = <>{children}</>
    }

    return (
        <Session sessionStatus={sessionStatus}>
        <Navigation />
        {/* On conditionne l'affichage de notre fil d'arianne (suite de liens cliquable (home/connexion/inscription...)) */}
        {isDisplayBreadcrumbs && <Breadcrumbs />} 
        {view}
        <Footer />
        </Session>
    )
}