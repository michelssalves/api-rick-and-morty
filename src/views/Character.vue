 
<template>
  <div class="home">
      <Header :title="title"></Header>
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
              <th><a id="a-color" :href="character.location.url">{{character.location.name}}</a></th>
             <!-- <th>
                <ul>
                  <li>
                    <a v-for="(episodes, key) in character.episode"  target="_blank" :href="episodes">{{ key + 1 }}</a>
                  </li>
                </ul>
              </th>-->
              <th>
                <select @change="sortBy" name="" id="">
                    <option v-for="(episodes, key) in character.episode" :value="episodes" >{{ key + 1 }}</option>
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
import Header from '../components/Header.vue'

export default {
  name: 'Character',

  components: {
    Header
  },
  data() {
    return {
      characters: [],
      title: 'Character',
 
      
    }
  },
  mounted() {

    this.getAllCharacters()

  },
  methods: {
    sortBy: function(event){
     // alert('Hello ' + this.name + '!')
    console.log(event.target.value)
    },
    async getAllCharacters() {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          // manipula o sucesso da requisi��o
          //console.log(res.data.results);
          this.characters = res.data.results

        })
        .catch(e => {
          // manipula erros da requisi��o
          //console.error(e);
        })
    },

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
  margin-top: 30px;
}
.size-img {
    width: 75px;
    height: 75px;
}
#a-color{
  color: white
}
</style>
