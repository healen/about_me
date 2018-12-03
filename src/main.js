import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Xui from 'healen-x-ui'
import 'healen-x-ui/packages/x-css/lib/index.css'
Vue.use(Xui)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
