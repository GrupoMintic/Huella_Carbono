import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"; //Se trae el bootstrap

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
