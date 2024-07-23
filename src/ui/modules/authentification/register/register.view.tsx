import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typograpy";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/forms";

interface Props {  // ici on factorise notre code de formulaire, on lui donne le nom "Form" avec les spécificités de FormType, que l'on va retransmettre à RegisterForm plus bas sur cette page
  form: FormsType
}

export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/svg/character1.svg"
            alt="Description de l'illustration..."
            className=""
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_x="px-9" padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
            <Typography variant="caption4" component="span" theme="gray">
                        Tu as déjà un compte?
                    </Typography>
                    <Typography variant="caption4" component="span" theme="primary">
                        <Link href="/connexion">Connexion</Link>
                    </Typography>
            </div>
          </div>
          {/*  ici on retransmet l'interface de form à RegisterForm */}
          <RegisterForm form={form}/> 
          <Typography
          variant="caption4" theme="gray" className="max-w-md mx-auto text-center space-y-1">
            <div>En t'inscrivant tu acceptes les</div>
            <div>
                <Link href="/#" className="text-gray">
                Condition d'utilisation
                </Link>
               {" "} et la {" "}
                <Link href="/#" className="text-gray">
                Politique de confidentialité.
                </Link>
            </div>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
