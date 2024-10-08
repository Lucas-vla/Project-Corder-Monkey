import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/disquette.svg",
    imageAlt: "Illustration",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "Illustration",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "Illustration",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités !",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "Illustration",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière !",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
        {/* ici on à créer un cercle gris et on l'a mis en "relative" pour pouvoir inserer l'image a l'interieur avec "fill" */}
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="blur-2xl"
          // ici on a utiliser on a dupliquer la balise Image et on lui a appliquer "Blur" pour avoir un joli effet de couleur propre à l'image, il va donc s'adapter aux couleurs de chaque images !
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
          // ici on a utiliser "object-scale-down pour que l'image s'insère entierement dans le cercle (qui a été Blur, sans ça elle dépasse et l'utilisation du overflow-hidden dans la div garde en place la forme de cercle en gardant la couleur adaptative derriere l'image !)"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-400">
      <Container className="grid grid-cols-12 gap-24 py-24">
        {/* grid-cols-12 permet de créer un espace de 12 colonnes */}
        <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
        {/* col-span-7 est utiliser pour determiner combien de colonne va occuper la div, ici 7 */}
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'endroit le plus cool pour devenir développeur
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Du partage, des connexions et des formations notre app gère tout
              ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
            </Typography>
            <Button
              variant="secondary"
              baseUrl="/#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption3"
              theme="gray"
              component="div"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};
