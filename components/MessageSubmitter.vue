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

const message = ref({
  name: "",
  message: "",
});

const submitMessage = async () => {
  const response = await useFetch("/api/messages", { method: "POST", body: message });
  return console.log(response);
};
</script>

<style></style>
