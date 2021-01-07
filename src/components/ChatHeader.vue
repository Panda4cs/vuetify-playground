<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>Hello, {{ getName }}!</v-list-item-title>
      <v-list-item-subtitle>Type something into chat.</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getName"]),
  },
};
</script>

<style>
</style>