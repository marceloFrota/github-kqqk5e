<template>
  <MessageSubmitter />
  <MessageDisplayer :messages="messages" />
</template>

<script setup>
const { data: messages } = await useFetch(`/api/messages`);
</script>
