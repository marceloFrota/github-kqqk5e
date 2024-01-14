import { getQuery } from 'h3';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { useFirebaseApp, useFirestore, useCollection } from 'vuefire';
import { collection, getDocs } from 'firebase/firestore';
import { app, db, messagesRef } from '../lib/firebase';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    //const messages = await getDocs(messagesRef);
    const messages = await useCollection(collection(db, 'messages'));

    //const messages = [{ id: 1, name: 'nome1' }];

    return messages;
  } catch (error) {
    return { error: error.message };
  }
});
