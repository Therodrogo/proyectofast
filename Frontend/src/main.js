import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'



import 'vuesax/dist/vuesax.css' //Vuesax styles



Vue.config.productionTip = false

Vue.use(Vuesax, {
  colors: {
    primary: '#9370a4',
    success: '#f79034',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(255, 130, 0)',
    dark: 'rgb(36, 33, 69)'
  }
})


new Vue({
  router,
  store,
  Vuesax,
  render: h => h(App)
}).$mount('#app')
