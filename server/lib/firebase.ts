import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

//const config = useRuntimeConfig();

const firebaseConfig = {
  apiKey: 'AIzaSyCiV_5UiUHTk8FoVwrvvgQV-OnokffHIa8',
    authDomain: 'teste-b7e0e.firebaseapp.com',
    projectId: 'teste-b7e0e',
    storageBucket: 'teste-b7e0e.appspot.com',
    messagingSenderId: '322096531629',
    appId: '1:322096531629:web:a4ade9ae36ad9b0a9a1e24',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messagesRef = collection(db, 'messages');
