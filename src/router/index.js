import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../views/Character.vue'
import Location from '../views/Location.vue'
import Episodes from '../views/Episodes.vue'


Vue.use(VueRouter)

const routes = [

  {path: '/', name: 'Character', component: Character},
  {path: '/location', name: 'Location', component: Location},
  {path: '/episodes', name: 'Episodes', component: Episodes},
]

const router = new VueRouter({
  routes
})

export default router
