import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Link from "next/link";

export const AccountAvatarNavigationLink = () => {
  const { authUser } = useAuth();

  const { photoURL, displayName } = authUser;

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <Avatar
        src={photoURL}
        alt={
          displayName ? `avatar de ${displayName}` : "avatar de l'utilisateur"
        }
        size="large"
      />
      <div className="max-w-[160px]">
        {" "}
        {/* on défini une max width pour l'utilisation du truncate, cela ajoutera des "..." si le nom du user est trop */}
        <Typography variant="caption2" weight="medium" className="truncate">
          {" "}
          {/* Truncate va permettre au site de s'ajuster si le user a un nom très long, on a juste a definir une max width à la div */}
          {displayName ? displayName : "Bienvenue"}
        </Typography>
        <Typography variant="caption4" weight="medium" theme="gray">
          Mon Compte
        </Typography>
      </div>
    </Link>
  );
};
