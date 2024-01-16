import { readBody } from "h3";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await addDoc(collection(db, "messages"), {
      name: body.name,
      message: body.message,
    });
    return { status: 200, body: "OK" };
  } catch (error: any) {
    return { error: error.message };
  }
});
