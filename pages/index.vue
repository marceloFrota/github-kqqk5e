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


const { data: messages } = await useFetch(`/api/messages`);
</script>
