import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  list_menus: [],
  menu: {},
  meals: [],
  ingredients: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}