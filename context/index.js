import { createContext, useContext, useState, useEffect } from "react";
import { handleAuthChange } from "../firebase/auth";

const Store = createContext();

export const useStore = () => useContext(Store);

export const Provider = ({ children }) => {
  const [state] = useState("store");

  useEffect(() => {
    handleAuthChange();
  }, [])

  return <Store.Provider value={{ state }}>{children}</Store.Provider>;
};
