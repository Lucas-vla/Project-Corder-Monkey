export interface BaseComponentProps {
    next: () => void; 
    previous: () => void;
    isFirstStep: () => boolean;
    isFinalStep: () => boolean;
    stepsList: onboardingStepsListInterface[];
    getCurrentStep: () => onboardingStepsListInterface | undefined;
}  

export interface onboardingStepsListInterface {
  id: number;
  label: string;
  component: {
    step: React.ComponentType<BaseComponentProps>;
  };
}
