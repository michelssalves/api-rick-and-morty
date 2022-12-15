import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery/src/jquery.js'
import popper from 'popper.js/dist/popper.min.js'
import bundle from 'bootstrap/dist/js/bootstrap.min.js'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(bootstrap, jQuery, popper, bundle)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
