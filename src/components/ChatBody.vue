<template>
  <div class="body">
    <v-list-item two-line v-for="msg in getMsgs" :key="msg.id" >
      <v-list-item-content>
        <v-list-item-title >{{ msg.sender }}</v-list-item-title>
        <v-list-item-subtitle>{{ msg.text }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMsgs"]),
  },
};
</script>

<style scoped>
.body {
 
  overflow-y: scroll;
  height: 300px;
}

</style>