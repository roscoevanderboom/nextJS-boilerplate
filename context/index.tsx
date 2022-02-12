// Types
import type { NextRouter } from "next/router";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { handleAuthChange } from "../lib/firebase/auth";
import appState from "./initialState";
import { appReducer } from "../reducers";

const Store = createContext(appState);

export const useStore = () => useContext(Store);

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, appState);
  const router = useRouter();

  const actions = (type: string, payload: any) => {
    dispatch({
      type: type,
      payload: payload,
    });
  };

  useEffect(() => {
    handleAuthChange(router, actions);
  }, []);

  return <Store.Provider value={{ ...state, actions, router }}>{children}</Store.Provider>;
};
