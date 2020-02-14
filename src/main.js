import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),  
// }).$mount('#app')


export default new Vue({
  el: '#app',  
  router,  
  render: h => h(App),  
})
