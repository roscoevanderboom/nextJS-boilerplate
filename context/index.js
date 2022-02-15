import { createContext, useState, useContext } from "react";

const Store = createContext();

export function Provider({ children }) {
  const [user, setUser] = useState("Roscoe");

  return <Store.Provider value={{ user }}>{children}</Store.Provider>;
}

export default function useStore() {
  return useContext(Store);
}
