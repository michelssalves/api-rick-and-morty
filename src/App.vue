<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Character</router-link>
      <router-link to="/location">Location</router-link>
      <router-link to="/episodes">Episode</router-link> 
      </div>
    <Header/>
    <router-view/>
  </div>
</template>
<script>

export default {
 
  components: {
    name: 'App',
    
  },

}
</script>
