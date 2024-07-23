import { Typography } from "@/ui/design-system/typography/typograpy";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { clsx } from "clsx";
import { RiHome3Line } from "react-icons/ri";
import { Container } from "../container/container";
import Link from "next/link";

export const Breadcrumbs = () => {
  // voir vidéo fil d'arianne (15) explication si oubli
  const router = useRouter();
  const asPath = router.asPath;
  const segments = asPath.split("/");
  const lastSegment = segments[segments.length - 1];
  segments[0] = "accueil";

  const view = segments.map((path, index) => (
    <div key={uuidv4()} className="flex items-center">
      <Link href={index > 0 ? `/${segments.slice(1, index +1).join("/")}` : `/`}>

        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "accueil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome3Line className="inline -mt-1" />
          )}
          {/* ici path.replace va enlever les - et les remplacer par des espace pour éviter d'avoir: mot-de-passe-oublié,
         qu'on a récuperer de l'url pour l'afficher sur le site. 
         Rappel: le /g est utilisé pour concerner tous les - et pas seulement le 1er rencontré. */}
        </Typography>
        {/* ici on conditionne le fait d'ajouter un / entre chaque liens cliquable en évitant d'en ajouter un à la fin (après le dernier élement) */}
        {path !== lastSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600 "
          >
            /
          </Typography>
          // c'est juste au dessus qu'on a ajouter le fait de mettre un / entre chaque éléments
        )}
      </Link>
    </div>
  ));

  return <Container className="flex items-center gap-2 py-7">{view}</Container>;
};
