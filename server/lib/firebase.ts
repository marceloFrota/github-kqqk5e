import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const config = useRuntimeConfig();

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
  api_url:
    'https://githubkqqk5e-sdep--3000--f7aa08df.local-credentialless.webcontainer.io/',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messagesRef = collection(db, 'messages');
