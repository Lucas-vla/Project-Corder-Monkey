import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { Typography } from "@/ui/design-system/typography/typograpy";
import clsx from "clsx";

interface Props {
  tabs: onboardingStepsListInterface[];
  getCurrentStep: () => onboardingStepsListInterface | undefined;
}

export const OnboardingTabs = ({ tabs, getCurrentStep }: Props) => {
  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-6">
        {tabs &&
          tabs.map(
            (tab) =>
              tab.id !== tabs.length && ( // ici on va cacher la "final step de l'onboarding on aura donc seulement "bienvenue, profile et avatar" et le message de felicitation ne s'affichera pas dans le suivis des étapes.
                <div
                  key={tab.id}
                  className={clsx(
                    getCurrentStep && getCurrentStep()?.id === tab.id
                      ? "border-primary"
                      : "border-gray-400",
                    "relative z-10 py-2.5 border-b-[2px]"
                  )}
                >
                  <Typography
                    variant="caption3"
                    weight="medium"
                    theme={
                      getCurrentStep && getCurrentStep()?.id === tab.id
                        ? "primary"
                        : "gray-600"
                    }
                  >
                    {tab.label}
                  </Typography>
                </div>
              )
          )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>{" "}
      {/* ici on s'occupe de la barre en dessous des tabs */}
    </div>
  );
};
