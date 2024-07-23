import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      {/* overflow-hidden permet de cacher tout ce qui depasse du container (une image sera coupé si elle deborde sur le footer par exemple) */}
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          {/* ajouter un max-w-lg au composant typography permet de reduire la place que prend le texte dans le container, permet de stylyser la forme du texte en locurance pour aller a la ligne plus tôt dans ce cas ici. */}
          Rejoins les singes codeurs !
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="mx-w-xl"
        >
          Ici, on se prend pas la tête, mais on code comme des bêtes ! Rejoins
          notre tribu de singes codeurs, partage tes projets les plus fous et
          fais-toi de nouveaux amis développeurs.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        src="/assets/svg/rocket.svg"
        alt="Illustration d'une fusée pour matérialiser l'évolution du level des dev Front-end"
        width={811}
        height={596}
        className="absolute top-0 right-0 z-0" //le z-0 permet au texte de passer par dessus l'image pour éviter qu'il soit caché par celle-ci.
      />
    </Container>
  );
};
