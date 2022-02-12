import { auth } from "../lib/firebase/app";
import type { NextRouter } from "next/router";
import { createContext, useContext, useEffect, useReducer } from "react";

const { getAuth } = auth;
const _auth = getAuth();
const user = _auth.currentUser;

const AuthContext = createContext(user);