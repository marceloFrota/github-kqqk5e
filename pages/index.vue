<template>
  <MessageSubmitter />
  <MessageDisplayer :messages="messages" />
  {{ messages2 }}
</template>

<script setup>
import { app, db, messagesRef } from '../server/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useFirebaseApp, useFirestore, useCollection } from 'vuefire';


const messages2 = useCollection(collection(db, 'messages'));

db.collection('messages').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New city: ', change.doc.data());
    }
    if (change.type === 'modified') {
      console.log('Modified city: ', change.doc.data());
    }
    if (change.type === 'removed') {
      console.log('Removed city: ', change.doc.data());
    }
  });
});




const { data: messages } = await useFetch(`/api/messages`);
</script>
