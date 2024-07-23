import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import React, { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Typography } from "@/ui/design-system/typography/typograpy";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
  const { authUser, reloadAuthUserData} = useAuth();
  const { value: isLoading, toggle } = useToggle();

  // setting confetti
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance.confetti; // Assurez-vous d'accéder à la propriété confetti
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    makeShot(0.2, {
        spread: 26,
        startVelocity: 55,
      });
      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        startVelocity: 55,
      });
      makeShot(0.1, {
        spread: 125,
        startVelocity: 120,
        decay: 0.92,
        scalar: 1.2, 
      });
      makeShot(0.15, {
        spread: 85,
        startVelocity: 75,
        decay: 0.92,
        scalar: 1.2, 
      });
      makeShot(0.3, {
        spread: 1100,
        startVelocity: 65,
        decay: 0.92,
        scalar: 1.2, 
      });
      
  }, [makeShot]);

  useEffect(()=> { // on lance les confettis dans un useEffect
        setTimeout(() => {
            fire()
        }, 50)
  }, [])

  const handleCloseOnboarding = async () => {
    toggle();

    const { error } = await firestoreUpdateDocument(
        "users", 
        authUser.uid, {
        onBoardingIsCompleted: true
    })
    if (error) {
        toggle();
        toast.error(error.message);
        return;
    }
    reloadAuthUserData()
    toggle()
  };

  return (
    <>
      <ReactCanvasConfetti
        onInit={(instance) => getInstance(instance)}
        style={{
            zIndex: 9999, // pour que les confetti passent devant le logo
          position: "fixed",
          width: "100%",
          height: "100%",
          top: -80,
          left: 0,
        }}
      />
      <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
          <Container className="h-full">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="flex justify-center">
                  <Logo size="large" />
                </div>
                <Typography variant="h1" component="h1" className="text-center">
                  Félicitation !
                </Typography>
                <Typography
                  variant="body-base"
                  component="p"
                  theme="gray"
                  className="text-center"
                >
                  Tu fais maintenant partie de la tribu des singes codeurs ! Nous sommes
                  ravis de t'accueillir parmi nous. Tu vas pouvoir te lancer dans
                  l'aventure, partager tes projets les plus fous et rencontrer des
                  développeurs aussi passionnés que toi. Alors prépare-toi, car notre
                  communauté est prête à te secouer les branches et à te faire grimper
                  au sommet de l'arbre du développement web !
                </Typography>
              </div>
            </div>
          </Container>
        </div>
        <OnboardingFooter
          isFinalStep={isFinalStep}
          next={handleCloseOnboarding}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};