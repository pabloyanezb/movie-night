<template>
  <v-container>
    <v-row>
      <v-col
        md="12"
        v-for="match in matches"
        :key="match.id"
        class="pt-10"
      >
        <v-card
          class="mx-auto"
          max-width="600"
        >
            <v-row>
              <v-col md="6" class="px-8">
                <v-list-item-title class="headline mb-1">
                  {{match.title}}
                </v-list-item-title>
                <p>
                  {{match.overview}}
                </p>
              </v-col>
              <v-col md="6" class="py-0">
                <v-img :src="getMovieImage(match.poster_path)"></v-img>
              </v-col>
            </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    getMovieImage(posterPath) {
      return posterPath ? 
      `https://image.tmdb.org/t/p/w500/${posterPath}` : '';
    }
  },
  computed: {
    matches() {
      return this.$store.state.user.matches;
    }
  }
}
</script>

<style>

</style>