import { DocumentData, getFirestore, collection, getDocs } from "firebase/firestore";

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