// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as _auth from "firebase/auth";
import * as _firestore from "firebase/firestore";
import * as _storage from "firebase/storage";
import * as _database from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACaLu6ZfAgoNnghb8pVXnTQodXfotyiXs",
  authDomain: "boilerplate-react-native.firebaseapp.com",
  databaseURL: "https://boilerplate-react-native-default-rtdb.firebaseio.com",
  projectId: "boilerplate-react-native",
  storageBucket: "boilerplate-react-native.appspot.com",
  messagingSenderId: "614988005183",
  appId: "1:614988005183:web:65a27358e16d3aff5c1d8a"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
export const database = _database;
export const storage = _storage;
export const firestore = _firestore;
export const auth = _auth;