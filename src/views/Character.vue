<template>
  <div class="home">
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Location</th>
            <th>Episodes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="character in characters" >
              <th>{{character.id}}</th>
              <th ><img class="size-img" :src="character.image" alt=""></th>
              <th><a :href="character.location.url">{{character.location.name}}</a></th>
             <!-- <th>
                <ul>
                  <li>
                    <a v-for="(episodes, key) in character.episode"  target="_blank" :href="episodes">{{ key + 1 }}</a>
                  </li>
                </ul>
              </th>-->
              <th>
                <select name="" id="">
                    <option v-for="(episodes, key) in character.episode"  target="_blank" :href="episodes">{{ key + 1 }}</option>
                </select>
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
      index: 0,
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
          //console.log(res.data.results);
          this.characters = res.data.results

        })
        .catch(e => {
          // manipula erros da requisição
          //console.error(e);
        })
    },
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
