<template>
  <v-card
    class="mx-2 my-2"
    max-width="374"
    @click="openCard"
  >
    <v-img
      class="mx-0"
      height="250"
      :src="showPicture"
    />
    <v-card-title
      class="my-3 pa-0"
    >
      {{ movie.original_title }}
    </v-card-title>
    <v-card-text
      class="my-3 pa-0"
    >
      <v-row
        class="mx-0"
        align="center"
      >
        <v-rating
          :value="movie.vote_average"
          color="amber"
          half-increments
          length="10"
          dense
          size="14"
          readonly
        />
        <div
          class="grey--text ml-4"
        >
          {{ movie.vote_average }}  ({{ movie.vote_count }}) Votes
        </div>
      </v-row>
      <div
        class="overview"
      >
        {{ movie.overview }}
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
  export default {
    props: {
      movie: {
        type: Object,
      }
    },
    computed: {
      showPicture() {
        return `https://image.tmdb.org/t/p/w500_and_h282_face${this.movie.poster_path}`;
      },
    },
    methods: {
      openCard() {
        this.$router.push({ name: 'moviecard', params: { film: this.movie } })
      }
    },
  };
</script>
