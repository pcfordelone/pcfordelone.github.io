import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export const useProfile = () => {
  const context = useContext(ProfileContext);

  return context;
};
