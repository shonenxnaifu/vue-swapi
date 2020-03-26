<template>
  <b-row class="mt-5">
    <b-col cols="4" class="my-2"
       v-for="(item) in filmsList"
       :key="item.episode_id"
    >
      <b-card :header="item.title">
        <b-card-text>
          <strong>Director</strong>: {{ item.director }}
        </b-card-text>
        <b-card-text>
          <strong>Producer</strong> {{ item.producer }}
        </b-card-text>
        <b-card-text>
          <strong>Release Date</strong> {{ item.release_date }}
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FilmsList',
  data () {
    return {
      filmsList: []
    }
  },

  created () {
    this.getListFilm()
  },

  methods: {
    getListFilm () {
      axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films/')
        .then(res => {
          this.filmsList = res.data.results
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
