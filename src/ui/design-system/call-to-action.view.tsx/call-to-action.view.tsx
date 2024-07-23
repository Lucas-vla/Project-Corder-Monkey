import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typograpy";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
        {/* Rappel : le overflow hidden permet de masquer les parties de l'image (la bombe) qu'on ne veut pas voir derriere d'autre partie du site comme le footer. */}
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          {/* Rappel : la position relative et z-10 permette au texte de passer devant l'image et éviter de le tronquer. */}
          <Typography variant="h2" theme="white" component="h2">
            N’attend pas pour développer tes compétences...
          </Typography>
          <div>
            <Button
              variant="success"
              baseUrl="#/"
              linkType={LinkTypes.EXTERNAL}
            >
              Formations React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1210}
            height={1210}
            src="/assets/svg/bomb.svg"
            alt="Une Bombe"
            className="absolute -bottom-[460px] -right-[230px]"
          />
        </div>
      </Container>
    </div>
  );
};
