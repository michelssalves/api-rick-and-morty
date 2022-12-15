<template>
    <div class="header">
      <div class="container">
      <div class="title">
      <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  props: ['title'],
  data() {
    return {
      
      
    }
  }
}
</script>
<style>
.nav{
  background-color: #1D9790;
  overflow: hidden;
  
}
.nav a {
  float: left;
  color: #330C3A;
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
  border: #330C3A;
  border-radius: 15px;
  border-style: double;
  background-color:#1D9790;
  font-style: oblique;
}
</style>
  