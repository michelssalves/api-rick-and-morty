<template>
  <div class="episodes">
   
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Episodes',
  components: {

  },
  data() {
    return {

      episodes: []

    }
  },
  mounted() {

    this.getAllEpisodes()

  },
  methods: {
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
    },
  } 
}
</script>
<style>

</style>
