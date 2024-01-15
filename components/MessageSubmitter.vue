<template>
  <form>
    <p>Submit new message:</p>
    <div class="card flex justify-content-center">
      <InputText type="text" v-model="message.name" placeholder="Name" />
      <InputText type="text" v-model="message.message" placeholder="Message" />
      <Button label="Submit" @click="submitMessage" />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { app, db, messagesRef } from '../server/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useFirebaseApp, useFirestore, useCollection } from 'vuefire';

const message = ref({
  name: "",
  message: "",
});


const submitMessage = async () => {
  console.log(message.value);
  try {
    const docRef = await addDoc(collection(db, "messages"), message.value);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<style></style>
