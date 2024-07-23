import { BaseComponentProps } from "@/types/onboarding-steps-list";

export const OnboardingView = ({
  getCurrentStep,
  next,
  previous,
  isFirstStep,
  isFinalStep,
  stepsList,
}: BaseComponentProps) => {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;
    return (
      <div>
        {Component && (
          <Component
            getCurrentStep={getCurrentStep}
            next={next}
            previous={previous}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            stepsList={stepsList}
          />
        )}
      </div>
    );
  }
  return null;
};
