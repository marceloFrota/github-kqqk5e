<template>
  <MessageSubmitter />
  <MessageDisplayer :messages="messages" />
  {{ messages2 }}
</template>

<script setup>
const { data: messages } = await useFetch(`/api/messages`);
</script>
