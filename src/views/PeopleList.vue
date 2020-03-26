<template>
  <b-row class="mt-5">
    <b-col cols="4" class="my-2"
           v-for="(item, index) in peopleList"
           :key="item.name"
    >
      <b-card :header="item.name">
        <table>
          <tr>
            <td class="pr-4"><strong>Birth year:</strong></td>
            <td>{{ item.birth_year }}</td>
          </tr>
          <tr>
            <td class="pr-4"><strong>Eye Color:</strong></td>
            <td>{{ item.eye_color }}</td>
          </tr>
        </table>
        <b-button @click="linkDetail(index + 1)" class="mt-4" size="sm" variant="primary">see more</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PeopleList',
  data () {
    return {
      peopleList: []
    }
  },

  created () {
    this.getListPeople()
  },

  methods: {
    getListPeople () {
      axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/')
        .then(res => {
          this.peopleList = res.data.results
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    linkDetail (id) {
      this.$router.push('/people/' + id)
    }
  }
}
</script>
