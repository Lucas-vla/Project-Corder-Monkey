import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      {/* on demande ci-dessous le non affichage du fil d'ariane uniquement sur cette page en le passant à false */}
      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
