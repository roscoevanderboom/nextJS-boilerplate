// Types
import { createContext, useContext, useEffect, useReducer, FC } from "react";
import { useRouter } from "next/router";
import { handleAuthChange } from "../lib/firebase/auth";
import appState from "./initialState";
import { appReducer } from "../reducers";
// Types
import { AppState } from "./types";

const Store = createContext<AppState | null>(null);

export const useStore = () => useContext(Store);

export const Provider: FC = ({ children }) => {
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

  useEffect(() => {
    state.loading
      ? router.push("/loading")
      : !state.loading && state.user
      ? router.push("/dashboard")
      : !state.loading && !state.user
      ? router.push("/")
      : null;
  }, [state.loading, state.user]);

  return (
    <Store.Provider value={{ ...state, actions }}>{children}</Store.Provider>
  );
};
