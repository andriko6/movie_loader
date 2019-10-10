<template>
  <v-content
    v-if="movie.id"
    class="pt-0 ml-2"
  >
    <v-row>
      <v-col>
        <v-btn
          class="mx-2 mt-2"
          outlined
          color="primary-green"
          @click="goBack"
        >
          Back to Search
        </v-btn>
        <v-card
          class="card ma-3 pa-6 mx-auto"
          max-width="500"
        >
          <v-img
            class="image"
            :src="showPicture"
          />
          <v-card-title
            class="my-3 pa-0"
          >
            {{ movie.original_title }} ({{ showDate }})
          </v-card-title>
          <v-card-title
            v-if="movie.tagline"
            class="ma-0 pa-0 subtitle-2 font-italic font-weight-light"
          >
            "{{ movie.tagline }}"
          </v-card-title>
          <v-card-text
            class="ma-0 pa-0"
          >
            <v-row
              class="mx-0 mt-3"
            >
              <v-rating
                :value="movie.vote_average"
                color="amber"
                half-increments
                length="10"
                dense
                size="14"
                readonly
              >
              </v-rating>
              <div
                class="grey--text ml-4"
              >
                {{ movie.vote_average }}  ({{ movie.vote_count }}) Votes
              </div>
            </v-row>
            <div
              v-if="movie.runtime"
              class="mt-3"
            >
              Duration: {{ movie.runtime }}min
            </div>
            <div
              class="my-3 pa-0"
            >
              <v-card-title
                class="title font-weight-bold ma-0 pa-0"
              >
                Overview
              </v-card-title>
              {{ movie.overview }}
            </div>
            <v-row
              class="mx-0 my-3 pa-0 subtitle-2 font-italic font-weight-bold"
            >
              <div
                v-if="movie.budget"
              >
                Budget: {{ movie.budget }} $
              </div>
            </v-row>
            <v-row
              class="mx-0 my-3 pa-0 font-weight-bold"
            >
              <div
                v-if="movie.homepage"
              >
                <a :href="movie.homepage">Homepage</a>
              </div>
            </v-row>
          </v-card-text>
          <v-divider class="ma-4"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
  import axios from 'axios';
  import {API_KEY, BASE_PATH} from "../const";
  export default {
    props: {
      id: {
        type: [Number, String],
      },
    },
    data: () => ({
      justify: 'center',
      movie: {}
    }),
    computed: {
      showPicture() {
        return `https://image.tmdb.org/t/p/w500_and_h282_face${this.movie.poster_path}`;
      },
      showDate() {
        return this.movie.release_date.substring(0, 4);
      },

    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    created() {
      axios.get(`${BASE_PATH}/3/movie/${this.id}$?api_key=${API_KEY}&language=en-US`)
          .then(({ data }) => { this.movie = data;
          });
    }
  };
</script>