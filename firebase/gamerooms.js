import { firestore } from "./api";
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
  deleteDoc,
} = firestore;

export const db = getFirestore();
const gameroomRef = collection(db, "gamerooms");

// Game methods
export const getGamerooms = (id, actions) => {
  const unsub = onSnapshot(gameroomRef, (querySnapshot) => {
    let docs = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().Available && !doc.data().Participants.includes(id)) {
        docs.push(doc.data());
      }
    });
    actions(REDUCERS_TYPES.SET_AVAILABLE_GAMES, docs);
  });
  return unsub;
};
export const getActiveGames = async (id, actions) => {
  const filter1 = where("Participants", "array-contains", id);
  // const filter2 = where("Available", "==", false);
  const q = query(gameroomRef, filter1);
  const unsub = onSnapshot(q, (querySnapshot) => {
    let docs = [];
    querySnapshot.forEach((doc) => docs.push(doc.data()));
    actions(REDUCERS_TYPES.SET_ACTIVE_GAMES, docs);
  });
  return unsub;
};
export const newGameListing = async (listingData) => {
  const docRef = doc(gameroomRef, listingData.RoomID);
  await setDoc(docRef, listingData);
};
export const updateGameListing = async (data) => {
  const docRef = doc(gameroomRef, data.RoomID);
  await updateDoc(docRef, data);
};
export const removeGameListing = async (id) => {
  const docRef = doc(gameroomRef, id);
  await deleteDoc(docRef);
};
export const listenToGameDoc = (id, actions) => {
  const docRef = doc(gameroomRef, id);
  const unsub = onSnapshot(docRef, (doc) => {
    actions(REDUCERS_TYPES.SET_CURRENT_GAME, doc.data());
  });
  return unsub;
};
