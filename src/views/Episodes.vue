<template>
  <div class="episodes">
    <Header :title="title"></Header>
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Episode</th>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(episode, key) in episodes" >
              <th>{{episode.id}}</th>
              <th >{{ episode.episode }}</th>
              <th >{{ episode.name }}</th>
              <th><a id="a-color":href="episode.url">{{ key + 1 }}</a></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../components/Header.vue'

export default {
  name: 'Episodes',
  components: {
    Header
  },
  data() {
    return {
      episodes: [],
      title: 'Episodes',


    }
  },
  mounted() {

    this.getAllEpisodes()

  },
  methods: {
    async getAllEpisodes() {
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(res => {
          // manipula o sucesso da requisicao
          console.log(res.data.results);
          this.episodes = res.data.results

        })
        .catch(e => {
          // manipula erros da requisicaoo
        //  console.error(e);
        })
    },
  } 
}
</script>
<style>
.episodes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#a-color{
  color: white
}
</style>
