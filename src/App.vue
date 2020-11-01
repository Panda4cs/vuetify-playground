<template>
  <v-app>
    <v-main>
      <TryMe/>
    </v-main>
  </v-app>
</template>

<script>
import TryMe from './components/TryMe';

export default {
  name: 'App',

  components: {
    TryMe,
  },

  data: () => ({
    //
  }),
};
</script>
