import { createContext, useContext, useState, useEffect } from "react";
import { handleAuthChange } from "../lib/firebase/auth";
import { listen_DB } from "../lib/firebase/rtdb";
import { listen_Collection } from "../lib/firebase/firestore";

const Store = createContext({});

export const useStore = () => useContext(Store);

export const Provider = ({ children } : any) => {
  const [state] = useState<string>("store");

  useEffect(() => {
    handleAuthChange();
    listen_DB();
    listen_Collection();
  }, [])

  return <Store.Provider value={{ state }}>{children}</Store.Provider>;
};