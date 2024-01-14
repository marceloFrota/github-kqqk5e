<template>
  <div class="card">
    <DataTable :value="messages" stripedRows tableStyle="min-width: 50rem">
      <Column field="id" header="Id"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="message" header="Message"></Column>
      <Column field="timestamp" header="Timestamp"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  messages: Array,
});
</script>

<style></style>
