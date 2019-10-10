<template>
  <v-content
  class="pt-6">
    <SelectField :genres="genres" @add-id="addId"/>
    <v-row>
      <v-col cols="12">
        <v-row
        :justify="justify"
        >
          <OneCard
          v-for="movie in movies"
          :key="movie.id"
          class="ma-3 pa-6"
          :movie="movie"
          outlined
          tile
          />
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
  import SelectField from './SelectField';
  import OneCard from './OneCard';
  import axios from 'axios';
  import {API_KEY, BASE_PATH} from "../const";

  export default {
    components: {
      OneCard,
      SelectField
    },
    data: () => ({
      justify: 'center',
      movies: [],
      genres: [],
    }),
    methods: {
      addId(selected) {
        this.id = selected.id;
        axios.get(`${BASE_PATH}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${selected.id}`)
          .then(({ data }) => { this.movies = data.results;
          });
      },
    },
    created() {
      if (!this.id) {
        axios.get(`${BASE_PATH}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
          .then(({ data }) => { this.movies = data.results;
          });
      }
      axios.get(`${BASE_PATH}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(({ data }) => { this.genres = data.genres;
        });
    }
  };
</script>
