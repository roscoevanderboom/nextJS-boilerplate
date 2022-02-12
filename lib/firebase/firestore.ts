import { firestore } from "./app"
import {DocumentData} from "firebase/firestore";
const { getFirestore, collection, getDocs } = firestore;

const db = getFirestore();
const gameroomRef = collection(db, "gamerooms");

export const listen_Collection = async () => {
    const list: DocumentData[] = [];
    const querySnapshot = await getDocs(gameroomRef);
    querySnapshot.forEach(((doc) => {
        list.push(doc.data());
    }))
    console.log(list);
}