<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Ta funcionando</h1>
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="character in characters">
            <th ><img class="size-img" :src="character.image"/></th>
            <th>{{ character.name }}</th>
            <th>{{ character.gender }}</th>
            
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

      characters: [],

    }
  },
  mounted() {
    this.getAll()
  },
  methods: {

    async getAll() {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          // manipula o sucesso da requisição
          console.log(res.data.results);
          this.characters = res.data.results

        })
        .catch(e => {
          // manipula erros da requisição
          console.error(e);
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
