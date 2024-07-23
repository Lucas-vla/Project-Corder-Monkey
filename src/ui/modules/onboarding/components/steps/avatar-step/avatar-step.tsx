import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typograpy";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { useState } from "react";
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTask,
} from "firebase/storage";
import { storage } from "@/config/firebase-config";
import { toast } from "react-toastify";
import { updateUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";

export const AvatarStep = ({
  previous,
  next,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { authUser } = useAuth();

  const { value: isLoading, toggle } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // le [0] permet de prendre le 1er élement que l'user a selectionné (on veut qu'une seule image)
    console.log("file", file);
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        let imgDataUrl: string | ArrayBuffer | null = null;
        if (e.target) {
          imgDataUrl = e.target.result;
        }
        setImagePreview(imgDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateUserDocument = async (photoURL: String) => {
    const body = {
        photoURL: photoURL
    };

    await updateUserIdentificationData(authUser.uid, body);

    const { error } = await firestoreUpdateDocument(
        "users",
        authUser.uid,
        body
    );

    if (error) {
        toggle();
        toast.error(error.message);
        return;
    }

    toggle();
    next()
  }

  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      toggle();
      storageRef = ref(
        storage,
        `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
      );
      uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log("error", error);
          toggle();
          toast.error("Unknown Error occured");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateUserDocument(downloadURL);
          });
        }
      );
    } else {
        next()
    }
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
                Dernière étape !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                C’est sûr t'as une tête à être sur Coders Monkeys ! Mais on a
                besoin de ta plus belle photo de profil pour que tout le monde
                puisse voir à quel point tu es incroyable. Mettre une photo
                sympa, c'est la garantie de te faire remarquer et de faire
                craquer les développeurs en quête de nouveaux contacts. Alors
                montre-nous ta belle gueule et rejoins la communauté !
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-center w-full">
              <UploadAvatar
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        previous={previous}
        next={handleImageUpload}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
};
