<template>
  <MessageSubmitter />
  <MessageDisplayer :messages="messages" />
</template>

<script setup>
const { data: messages } = await useAsyncData(() => $fetch("/api/messages", { method: "GET" }));
</script>
