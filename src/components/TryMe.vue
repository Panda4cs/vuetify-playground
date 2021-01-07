<template>
  <div class="chatUI rounded-lg secondary mx-3 my-1">
    <ChatHeader></ChatHeader>
    <v-divider class="grey darken-1 mx-3" dark></v-divider>
    <ChatBody></ChatBody>
    <v-divider class="grey darken-1 mx-3"></v-divider>
    <ChatBottom></ChatBottom>
  </div>
</template>

<script>
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatBottom from "./ChatBottom";
export default {
  components: {
    ChatHeader,
    ChatBody,
    ChatBottom,
  },
};
</script>

<style scoped>
.chatUI{
  width: 320px;
  /* height: 400px; */
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #292929;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}
</style>