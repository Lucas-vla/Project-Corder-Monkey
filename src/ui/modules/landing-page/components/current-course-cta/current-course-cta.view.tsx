import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Image from "next/image";
import { RiPlayCircleFill } from "react-icons/ri";

export const CurrentCourseCtaView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Formations React.js gratuite
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Apprends à coder l’app des singes codeurs
        </Typography>
        <Typography
          variant="caption3"
          theme="gray"
          component="p"
          className="mb-16"
        >
          Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
        </Typography>
        <a href="#/" target="_blank">
          <div className="relative bg-gray-400 rounded h-[626px]">
            {/* le fait de mettre la classe ci-dessus permet d'afficher à l'utilisateur
             un espace gris en l'occurance à la place de l'image si elle a du mal à charger,
              pour que l'utilisateur comprenne qu'un element va s'afficher à cet emplacement. */}
            <div className="flex flex-col items-center justify-center gap-2 relative h-full z-10 bg-gray rounded opacity-0 hover:opacity-95 text-white animate">
                {/* ici on travaille le fait que quand l'utilisateur va mouse over sur l'image,
                 un texte et une icone vont apparaitre en animation pour accentuer le fait que l'image est cliquable,
                  cela améliore l'xp utilisateur et rajoute du style au site */}
              <RiPlayCircleFill size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              fill
              src="/assets/images/courses-cta.jpg"
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
