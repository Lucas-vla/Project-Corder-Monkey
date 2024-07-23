import { Typography } from "@/ui/design-system/typography/typograpy";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // "Element" correspond à chaque {} du [] footerApplicationLinks
  const footerNavigationList = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          {/*le target _blank sert a ouvrir une nouvelle fenetre au click et pas rediriger la page principale */}
          <a href="http://youtube.com/@remotemonkey" target="_blank">
            <Image
              src="/assets/svg/ytb.svg"
              width={229}
              height={216}
              alt="Remote Monkey | Youtube"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright ${currentYear} | Created by `}
            <a
              href="https://arnaud-desportes.fr"
              target="_blank"
              className="underline"
            >
              Arnaud desportes
            </a>
            {` - Remote Monkey SASU`}
          </Typography>
          <div className="">
            <SocialNetworksButtons theme="gray"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}
const FooterLink = ({ data }: footerLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {/* ici on utilise linkTypes.INTERNAL pour éviter les problemes de recherche lors d'un bug (voir lib/link-type) */}
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
