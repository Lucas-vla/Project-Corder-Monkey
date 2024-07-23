import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { ProfileStep } from "./components/steps/profile-step/profile-step";
import { AvatarStep } from "./components/steps/avatar-step/avatar-step";
import { FinalStep } from "./components/steps/final-step/final-step";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1); //on peut typer le usestate directement avec <number>
  const stepsList: onboardingStepsListInterface[] = [
    { 
        id: 1, 
        label: "Bienvenue", 
        component: { step: WelcomeStep } 
    },
    {   id: 2, 
        label: "Profil", 
        component: { step: ProfileStep } 
    },
    {   id: 3, 
      label: "Photo de profil", 
      component: { step: AvatarStep } 
  },
  {   id: 4, 
    label: "Dernière étape", 
    component: { step: FinalStep } 
},
  ];

  const getCurrentStep = () => {
    return stepsList.find((element) => element.id === currentStep)
  }


  const next = () => { // cette fonction nous sert à "si étape actuelle est inférieure au total des étapes a faire, alors on incrémente 1" cela nous servira si on creer un bouton "next" pour passer à la prochaine étape.
    if (currentStep < stepsList.length)
        setCurrentStep(currentStep + 1)
  };

  const previous = () => { // ici on fait l'inverse, on met currentStep > 1 pour éviter de décrementer a -1/-2... qui n'existent pas.
    if (currentStep > 1 ) {
        setCurrentStep(currentStep - 1)
    }
  };

  const isFirstStep = () => { // ici cela nous servira à afficher certain élement selon si oui ou non nous somme sur la step 1. par exemple on pourra s'en servir pour ne pas afficher de bouton "retour" à l'étape 1.
    if (currentStep === 1) {
        return true
    } 
        return false
  }

  const isFinalStep = () => { // ici on s'en servira pour savoir si on est à la derniere étape ou non.
    if (currentStep === stepsList.length) {
        return true
    }
    return false
  }

  return (
  <OnboardingView 
        getCurrentStep={getCurrentStep}
        next={next}
        previous={previous}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        stepsList={stepsList}

  />
);
};
