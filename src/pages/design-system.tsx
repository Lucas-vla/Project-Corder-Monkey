// COMPONENT
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typograpy";
// ICO
import { RiUser6Fill } from "react-icons/ri";
import { Layout } from "@/ui/components/layout/layout";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design System" description="Description..." />

      <Layout>

      <Container className="space-y-10 py-10">
        <div className="max-w-6x py-10 mx-auto space-y-5">
          {/* Typography */}
          <div className="space-y-2">
            <Typography theme="primary" variant="body-lg" component="h1">
              Coders Monkeys
            </Typography>
            <Typography theme="secondary" variant="h2" component="div">
              Coders Monkeys
            </Typography>
            <Typography theme="primary" variant="h3" component="div">
              Coders Monkeys
            </Typography>
            <Typography variant="h4" component="div">
              Coders Monkeys
            </Typography>
            <Typography variant="caption1" weight="medium" component="div">
              Coders Monkeys
            </Typography>
          </div>
        </div>
        {/* Avatar */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Avatar
          </Typography>
          <div className="flex items-center gap-2 p-5 border: border-gray-400 rounded">
            <Avatar size="small" src="/assets/images/pp.jpg" alt="Avatar" />
            <Avatar src="/assets/images/pp.jpg" alt="Avatar" />
            <Avatar size="large" src="/assets/images/pp.jpg" alt="Avatar" />
          </div>
        </div>

        {/* Logo */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Logo
          </Typography>
          <div className="flex items-center gap-2 p-5 border: border-gray-400 rounded">
            <Logo size="very-small" />
            <Logo size="small" />
            <Logo size="medium" />
            <Logo size="large" />
          </div>
        </div>
        <div className="flex items-start gap-7">
          Spinners
          <div className="flex items-center gap-4 p-10">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button isLoading size="small">
            Accent
          </Button>
          <Button
            isLoading
            size="small"
            icon={{ icon: RiUser6Fill }}
            iconPosition="left"
          >
            Accent
          </Button>
          <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
            Accent
          </Button>
          <Button isLoading size="small" variant="secondary">
            secondary
          </Button>
          <Button isLoading size="small" variant="outline">
            Accent
          </Button>
          <Button
            isLoading
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
          />
        </div>

        <div className="flex items-center gap-4 p-10isLoading ">
          <Button size="small">Accent</Button>
          <Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
            Accent
          </Button>
          <Button size="small" icon={{ icon: RiUser6Fill }}>
            Accent
          </Button>
          <Button size="small" variant="secondary">
            secondary
          </Button>
          <Button size="small" variant="outline">
            Accent
          </Button>
          <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button>Accent</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">Accent</Button>
          <Button variant="disabled" disabled>
            Accent
          </Button>
          <Button size="medium" variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button size="large">Accent</Button>
          <Button size="large" variant="secondary">
            secondary
          </Button>
          <Button size="large" variant="outline">
            Accent
          </Button>
          <Button size="large" variant="disabled" disabled>
            Accent
          </Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="accent"
          />
        </div>
      </Container>
      </Layout>

    </>
  );
}
