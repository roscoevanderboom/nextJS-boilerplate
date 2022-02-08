import { firestore } from "./api";
import { newProfile } from "../constants/userProfile";
import uuidv4 from "../constants/uuid";
import { REDUCERS_TYPES } from "../reducers/app-reducer";

const {
  getFirestore,
  doc,
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  setDoc,
  updateDoc,
} = firestore;

export const db = getFirestore();

const profilesRef = collection(db, "profiles");
const profileRef = (id) => doc(profilesRef, id);
const requestRef = (id) => doc(profilesRef, id, "friendsList", "requests");
const friendsRef = (id) => doc(profilesRef, id, "friendsList", "friends");
const blockedRef = (id) => doc(profilesRef, id, "friendsList", "blocked");

// Add user
export const createUserProfile = async (user, displayName) => {
  const list = { list: [] };
  const id = uuidv4();
  const data = newProfile(user, displayName, id);
  await setDoc(profileRef(id), data);
  await setDoc(requestRef(id), list);
  await setDoc(friendsRef(id), list);
  await setDoc(blockedRef(id), list);
};
// User Profile methods
export const getUserProfile = async (uid) => {
  const q = query(profilesRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let id = "";
  querySnapshot.forEach((doc) => {
    id = doc.id;
  });
  return id;
};
export const watchProfile = (id, actions) => {
  onSnapshot(doc(profilesRef, id), (doc) => {
    actions(REDUCERS_TYPES.SET_USERDATA, doc.data());
  });
};
export const updateUserProfile = async (id, data) => {
  const docRef = doc(profilesRef, id);
  await updateDoc(docRef, data);
};
