import { getDocs } from "firebase/firestore";
import { messagesRef } from "../lib/firebase";

export default defineEventHandler(async (event) => {
  try {
    const snapshot = await getDocs(messagesRef);
    const messages = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return messages;
  } catch (error: any) {
    return { error: error.message };
  }
});
