import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";
import { GUEST } from "@/lib/session-status";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Connexion sur Coders Monkeys" description="Page de Mdp oublié" />
     
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
