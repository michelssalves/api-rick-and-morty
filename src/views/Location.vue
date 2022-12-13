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
  
}

</script>
<style>

</style>
