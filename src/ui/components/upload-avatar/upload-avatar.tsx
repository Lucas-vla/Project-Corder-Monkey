import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import clsx from "clsx";
import { RiCamera2Fill } from "react-icons/ri";

interface Props {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | ArrayBuffer | null;
  uploadProgress: number;
  isLoading: boolean;
}

export const UploadAvatar = ({
  handleImageSelect,
  imagePreview,
  uploadProgress,
  isLoading,
}: Props) => {

    const {authUser} = useAuth()

    const uploadProgressBarStyle = `fixed top-0 w-full left-0 h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`

  return (
    <div className="flex  items-center gap-5">

        <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%`}}/>
      <label className={clsx(
        isLoading ? "cursor-not-allowed" : "cursor-pointer",
        "inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium animate"
        )}>
        <div className="flex items-center gap-2">
          <RiCamera2Fill />
          <span>Choisir un fichier</span>
        </div>
        <input 
        type="file" 
        disabled={isLoading}
        className="hidden" 
        onChange={handleImageSelect} 
        />
      </label>
      <Avatar
        size="extra-large"
        alt="Avatar"
        isLoading={isLoading}
        src={
          imagePreview
            ? typeof imagePreview === "string"
              ? imagePreview
              : String(imagePreview)
            : authUser.userDocument.photoURL ? authUser.userDocument.photoURL
            : "/assets/svg/camera.svg"
        }
      />
    </div>
  );
};
