import { useState } from "react";

interface Props {
  initial?: boolean;
}
export const useToggle = ({ initial = false }: Props = {}) => { // le fait de créer "initial" permet de set l'etat initial de la valeur à true pour certain cas selon nos besoins.
  const [value, setValue] = useState<boolean>(initial);

  const toggle = () => {
    setValue(!value);
  };

  return {
    value,
    setValue,
    toggle,
  };
};
