import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  list_menus: [],
  list_subscriptions: [],
  menu: {},
  meals: [],
  subscription: {},
  ingredient: {},
  ingredients: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}