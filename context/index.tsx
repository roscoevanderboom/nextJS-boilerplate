// Types
import { createContext, useContext, useEffect, useReducer, FC } from "react";
import { handleAuthChange } from "../lib/firebase/auth";
import appState from "./initialState";
import { appReducer } from "../reducers";
// Types
import { AppState } from "./types";

const Store = createContext<AppState | null>(null);

export const useStore = () => useContext(Store);

export const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appState);

  const actions = (type: string, payload: any) => {
    dispatch({
      type: type,
      payload: payload,
    });
  };

  useEffect(() => {
    handleAuthChange(actions);
  }, []);

  return (
    <Store.Provider value={{ ...state, actions }}>{children}</Store.Provider>
  );
};
