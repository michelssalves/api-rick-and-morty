<template>
  <div class="location">
   
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Location',
  components: {

  },
  data() {
    return {

      locations: [],

    }
  },
  mounted() {

    this.getAllLocations()

  },
  methods: {
    async getAllLocations() {
      axios.get('https://rickandmortyapi.com/api/location')
        .then(res => {
          // manipula o sucesso da requisição
          //console.log(res.data.results);
          this.locations = res.data.results

        })
        .catch(e => {
          // manipula erros da requisição
         // console.error(e);
        })
    }
  },
  computed: {
    filterSearch(){
      return this.characters.filter((character) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

</script>
<style>
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.size-img {
    width: 75px;
    height: 75px;
}
</style>
