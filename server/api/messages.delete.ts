import { readBody } from "h3";
import { db } from "../lib/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
  try {
    const id = readBody(event);
    const colRef = collection(db, "messages");
    const docRef = doc(db, colRef, id);
    await deleteDoc(docRef);
    return { status: 200, body: "OK" };
  } catch (error: any) {
    return { error: error.message };
  }
});
