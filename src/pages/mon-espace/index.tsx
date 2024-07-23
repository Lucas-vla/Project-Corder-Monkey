import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";
import { REGISTERED } from "@/lib/session-status";

export default function UserAccount() {
  return (
    <>
      <Seo title="Mon espace" description="Page de l'espace personnel de l'utilisateur" />

      <Layout withSideBar sessionStatus={REGISTERED}>
            <ProfileContainer />
      </Layout>
    </>
  );
}
