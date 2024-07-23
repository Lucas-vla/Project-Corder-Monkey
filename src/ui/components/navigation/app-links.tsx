import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

// Pour que typescript comprenne que le typage AppLink doit s'appliquer à footerApplicationLinks il faut lui ajouter [] car c'est un Tableau qui comprend les elements à typer. Sans [] il ne reconnaitra pas le typage.
const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formations",
    baseUrl: "http://youtube.com/@remotemonkey",
    type: "external",
  },
];

const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon Espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mots-de-passe-perdu",
    type: "internal",
  },
];

const footerInformationLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "À propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contacts",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerSocialNetworkLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/@Formula1",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "www.linkedin.com/in/lucas-viola1",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "https://www.youtube.com/@Formula1",
    type: "external",
    icon: RiSlackFill,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworkLinks,
  },
];
