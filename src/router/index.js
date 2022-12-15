import Vue from 'vue'
import Router from 'vue-router'
import Character from '../views/Character.vue'
import Location from '../views/Location.vue'
import Episodes from '../views/Episodes.vue'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', 
      name: 'Character', 
      component: Character
    },{
      path: '/location', 
      name: 'Location', 
      component: Location
    },{
      path: '/episodes', 
      name: 'Episodes', 
      component: Episodes,
   }]
  
})

