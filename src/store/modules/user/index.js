import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VueCookies from 'vue-cookies'

const state = {
  user: [],
  token: VueCookies.get('Authorization') || '',
  phone:'',
  registration_info:{}
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}