import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export const queryByCollection = async (col) => {
  const colRef = collection(db, col);

  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

export const set = async (col, document) => {
  await setDoc(doc(collection(db, col)), document, { merge: true });
};

export const add = async (col, document) => {
  const colRef = collection(db, col);

  const docRef = await addDoc(colRef, document);

  return docRef;
};

export const del = async (col, id) => {
  const docRef = doc(db, col, id);
  return await deleteDoc(docRef);
};
