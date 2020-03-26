<template>
  <b-row class="mt-5">
    <b-col cols="6" class="my-2 mx-auto">
      <b-card header="">
        <table>
          <tr>
            <td class="pr-4 text-left"><strong>Name</strong></td>
            <td class="text-left">{{ people.name }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Gender</strong></td>
            <td class="text-left">{{ people.gender }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Birth year</strong></td>
            <td class="text-left">{{ people.birth_year }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Eye Color</strong></td>
            <td class="text-left">{{ people.eye_color }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Skin Color</strong></td>
            <td class="text-left">{{ people.skin_color }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Height</strong></td>
            <td class="text-left">{{ people.height }}</td>
          </tr>
          <tr>
            <td class="pr-4 text-left"><strong>Mass</strong></td>
            <td class="text-left">{{ people.mass }}</td>
          </tr>
        </table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PeopleDetail',
  data () {
    return {
      people: {}
    }
  },

  created () {
    this.getDetailPeople()
  },

  methods: {
    getDetailPeople () {
      axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/' + this.$route.params.id)
        .then(res => {
          this.people = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
