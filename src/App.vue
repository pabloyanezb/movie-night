<template>
  <v-app>
    <AppBar />
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
  computed: {
    userId() {
      return this.$store.state.user.id
    }
  }
};
</script>

<style>
body {
  background-color: #EEEEEE;
}
</style>
