<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Ta funcionando</h1>
    <div class="container">
      <input type="text" v-model="search" placeholder="Search">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Location</th>
            <th>Episode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <li v-for="character in characters">{{ character.id}}</li>
            </th>
            <th>
              <ul>
                <li v-for="character in characters" :key="character.id"><img class="size-img" :src="character.image"/></li>
              </ul>
            </th> 
            <th>
              <ul>
                <li v-for="character in characters">{{ character.location.name }}</li>
               
               
              </ul>
            </th>
            <th >
              <ul>
                <li v-for="character in characters">{{ character.episode }}</li>
              </ul>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      x: 0,
      search: '',
      characters: [],
      locations: [],
      episodes: []


    }
  },
  mounted() {

    this.getAllCharacters()
    this.getAllEpisodes()
    this.getAllLocations()

  },
  methods: {

    async getAllCharacters() {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          // manipula o sucesso da requisição
          console.log(res.data.results);
          this.characters = res.data.results

        })
        .catch(e => {
          // manipula erros da requisição
          //console.error(e);
        })
    },
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
    },
    async getAllEpisodes() {
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(res => {
          // manipula o sucesso da requisição
         // console.log(res.data.results);
          this.episodes = res.data.results

        })
        .catch(e => {
          // manipula erros da requisição
        //  console.error(e);
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
