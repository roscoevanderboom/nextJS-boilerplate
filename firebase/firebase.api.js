// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as _auth from "firebase/auth";
import * as _firestore from "firebase/firestore";
import * as _storage from "firebase/storage";
import * as _database from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
export const database = _database;
export const storage = _storage;
export const firestore = _firestore;
export const auth = _auth;