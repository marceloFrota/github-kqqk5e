import { getQuery, readBody } from 'h3';

import { initializeApp, getApp, getApps } from 'firebase/app';
import { useFirebaseApp, useFirestore, useCollection } from 'vuefire';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { app, db, messagesRef } from '../lib/firebase';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.message) {
      return Promise.reject(new Error('Invalid post'))
    }

    await addDoc(collection(db, 'messages'), {
      name: body.name,
      message: body.message,
    });


    return body;
  } catch (error) {
    return { error: error.message };
  }
});
