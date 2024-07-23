import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Image from "next/image";
import { Children } from "react";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HightlightListView = () => {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src="/assets/svg/cake.svg"
            alt="Illustration d'un gateau"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            De novice à développeur en un clin d'œil !
          </Typography>
          <div className="space-y-3">
            {/* Ci-dessous on à créer un composant ListPoint sur la même page pour pouvoir dupliquer proprement la liste*/}
            <ListPoint>Progresse rapidement.</ListPoint>
            <ListPoint>Inspire-toi.</ListPoint>
            <ListPoint>Gagne de l'assurance</ListPoint>
          </div>
          <div className="relative inline-block">
            {/* si la div est plus grande que la taille du boutton on peut utiliser "inline-block" pour la faire match à la taille du boutton.
             Sans ça le problème etait que l'icone du curseur était complètement en dehors du boutton car il se fiait à l'entiereté de la div.*/}
            <Button baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                Let's go
            </Button>
            <Image width={25} height={27} src="/assets/svg/cursor.svg" alt="un curseur noir" className="absolute right-7 -bottom-5"/>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        {/* on utilise le row-reverse pour donner un effet droite gauche aux elements sans avoir à re coder les emplacement*/}
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src="/assets/svg/toupie.svg"
            alt="Illustration d'un gateau"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
          Booste ta carrière de développeur
          </Typography>
          <div className="space-y-3">
            {/* Ci-dessous on à créer un composant ListPoint sur la même page pour pouvoir dupliquer proprement la liste*/}
            <ListPoint>Partage tes projets, obtiens des feedbacks.</ListPoint>
            <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
            <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
          </div>
          <div className="relative inline-block">
            {/* si la div est plus grande que la taille du boutton on peut utiliser "inline-block" pour la faire match à la taille du boutton.
             Sans ça le problème etait que l'icone du curseur était complètement en dehors du boutton car il se fiait à l'entiereté de la div.*/}
            <Button 
                variant="secondary"
                baseUrl="/#" 
                icon={{icon: RiArrowRightLine}} 
                iconPosition="right">
                Démarrer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

// On créer toute la logique du composant ici pour le rappeller dans le code plus haut,
//  ici le composant aura donc sa forme sa typo son icone et "children"
//   passé en Props équivaut donc aux noms à mettre dans chaques Noeud qu'on appellera dans le code
//  ici (Progresse rapidement) par exemple pour le 1er.
// c'est une autre manière que de faire une boucle pour écrire proprement.
interface Props {
  children: React.ReactNode;
}
const ListPoint = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  );
};
