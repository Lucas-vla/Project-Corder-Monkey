import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
  className?: string;
}

export const Spinner = ({ size = "medium", variant = "primary", className }: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "";

  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": // Default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }

  switch (variant) {
    case "primary": // Default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }
  return (
   <svg
        role="spinner"
        className={clsx(
            sizeStyles,
            variantStyles,
            "animate-spin",
            className
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        >
            <circle
            className="opacity-25"  
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            ></circle>
            <path
            className="opacity-55"
            fill="currentColor"
            d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
            ></path>
            
        </svg>
  )
};
