<template>
  <div class="location">
    <Header :title="title"></Header>
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Dimension</th>
            <th>Name</th>
            <th>Type</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(location, key)  in locations" >
              <th>{{location.id}}</th>
              <th>{{location.dimension}}</th>
              <th>{{location.name}}</th>
              <th>{{location.type}}</th>
              <th><a id="a-color" :href="location.url">{{ key + 1 }}</a></th>
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
  name: 'Location',
  components: {
    Header
  },
  data() {
    return {

      locations: [],
      title: 'Location'

    }
  },
  mounted() {

    this.getAllLocations()

  },
  methods: {
    async getAllLocations() {
      axios.get('https://rickandmortyapi.com/api/location')
        .then(res => {
          // manipula o sucesso da requisi��o
          console.log(res.data.results);
          this.locations = res.data.results

        })
        .catch(e => {
          // manipula erros da requisi��o
         // console.error(e);
        })
    }
  },
  
}

</script>
<style>
.location {
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
