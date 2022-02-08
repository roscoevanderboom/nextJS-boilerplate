import { database } from "./api";
import { REDUCERS_TYPES } from "../reducers/app-reducer";
const { getDatabase, ref, set, onValue, remove, update } = database;

const db = getDatabase();
const dbRef = (id) => ref(db, "gamerooms/" + id);

export const listenGameroom = (id, actions) => {
  let unsub = onValue(dbRef(id), (snapshot) => {
    const data = snapshot.val();
    actions(REDUCERS_TYPES.SET_CURRENT_GAME, data);
  });
  return unsub;
};

export const newGame = async (data) => {
  await set(dbRef(data.RoomID), data);
};

export const updateGameroom = async (data) => {
  await update(dbRef(data.RoomID), data);
};

export const deleteGame = async (id) => {
  await remove(dbRef(id))
}