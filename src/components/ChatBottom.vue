<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <!-- <v-col cols="1"></v-col> -->
        <v-col cols="10" >
          <v-text-field
            placeholder="Aa"
            filled
            rounded
            dense
            hide-details="auto"
            class="mx-4"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn class="" fab dark small color="">
            <v-icon dark> mdi-send </v-icon>
          </v-btn>
        </v-col>
        <!-- <v-col cols="1"></v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style scoped>
.col {
  padding: 0;
}
</style>