import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typograpy";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./account-avatar-link";

interface Props {}

export const Navigation = ({}: Props) => {
  const { authUser } = useAuth();

  const authentificationSystem = (
    <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">
              Connexion
            </Button>
            <Button
              baseUrl="/connexion/inscription"
              size="small"
              variant="secondary"
            >
              Rejoindre
            </Button>
          </div>
  )

  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-2">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Coders Monkeys
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Trouve de linspiration & reçois des feedbacks !
              </Typography>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <Link href="/Projets">Projets</Link>
            <Link href="/formations">Formations</Link>
            <Link href="contacts">Contacts</Link>
          </Typography>

          {!authUser ? authentificationSystem : <AccountAvatarNavigationLink/>}
        </div>
      </Container>
    </div>
  );
};
