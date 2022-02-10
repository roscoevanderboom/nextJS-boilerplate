
   
import { database } from "./app";
const { getDatabase, ref, set, onValue, remove, update } = database;

const db = getDatabase();
const dbRef = ref(db, "gamerooms");
const db_item_Ref = (id: string) => ref(db, "db_name/" + id);

export const listen_DB = () => {
  let unsub = onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  return unsub;
};
