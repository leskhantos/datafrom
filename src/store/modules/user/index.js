import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VueCookies from 'vue-cookies'

const state = {
  user: [],
  token: VueCookies.get('Authorization') || '',
  phone: '',
  registration_info: {},
  profile_info: {},
  list_profiles: {items: []},
  main_profile: [],
  profile: {},
  user_info: {},
  has_profiles: 0,
  nutrients: [],
  image: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}