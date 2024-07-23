import Image from "next/image";

interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium":  // Default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }
  return (<div>
    <Image 
    src="/assets/svg/singe.svg"
    alt="logo"
    width={sizeLogo}
    height={sizeLogo}
    unoptimized
    />
  </div>);
};
