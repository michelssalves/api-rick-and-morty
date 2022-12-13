<template>
    <div class="header">

      <Character :tituloCharacter="tituloCharacter"/>
    </div>
  
</template>
<script>
import Character from '../views/Character.vue'
export default{

  components: { 'Character': Character},
  data() {
    return {
      
      tituloCharacter: 'Character'
      
    }
  }
}
</script>
<style>
.nav{
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
   background-color: #ddd;
   color:#333; 
   
}
.title{
  text-align: center;
  font-size: 37px;
}
</style>
  