import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("Main context is missing !");
  }
  return context;
};
