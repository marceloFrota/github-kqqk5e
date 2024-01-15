<template>
  <div class="card">
    <DataTable :value="messages" stripedRows tableStyle="min-width: 50rem">
      <Column field="id" header="Id"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="message" header="Message"></Column>
      <Column field="timestamp" header="Timestamp"></Column>
      <Column frozen alignFrozen="right" headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-1" @click="edit(slotProps.data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-1" @click="remove(slotProps.data.id)" />
            </template>
        </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { app, db, messagesRef } from '../server/lib/firebase';
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { useFirebaseApp, useFirestore, useCollection } from 'vuefire';

const props = defineProps({
  messages: Array,
});

const remove = async (id) => {
  console.log(id)
  try {
    await deleteDoc(doc(db, "messages", id));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
</script>

<style></style>
