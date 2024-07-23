import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typograpy";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateUserIdentificationData } from "@/api/authentication";

export const ProfileStep = ({
  previous,
  next,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { authUser, reloadAuthUserData } = useAuth();

  const { value: isLoading, setValue: setLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "expertise",
      "biography",
    ];

    for (const field of fieldsToUpdate) {
      // ici ça nous sert a préremplir le nom si jamais le user appuis sur "retour" ça lui évitera de tout avoir a re remplir.
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFieldsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    next();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setLoading(true);

    if (
        displayName !== formData.displayName ||
        expertise !== formData.expertise ||
        biography !== formData.biography
    ) {
// Revoir "Gestion du backend avec firebase functions et firestore si jamais
        if (
          displayName !== formData.displayName || authUser.displayName !== formData.displayName
        ) {
          const data = {
            displayName: formData.displayName
          }

          const { error } = await updateUserIdentificationData(
            authUser.uid,
            data
          )
            if (error) {
              setLoading(false)
              toast.error(error.message)
              return
            }
        }

        handleUpdateUserDocument(formData) // ici on update si une ou plusieur des 3 infos (displayname/expertise/biography) à reçu une modif
    }
    setLoading(false)
    next()
  };

  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10 ">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Présente-toi !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment t'as atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepForm
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        previous={previous}
        next={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
};
