import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { SetTokenHeaders } from '@/api'
import VueCookies from 'vue-cookies'
import VueThemask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import vSelect from 'vue-select'

Vue.use(VueCookies)
Vue.use(VueThemask)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component('v-select', vSelect)

const token = VueCookies.get('Authorization')

if (token) {
  SetTokenHeaders(token)
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
