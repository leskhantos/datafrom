import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  listWater: [],
  listSleep: [],
  listWeight: [],
  listSport: [],
  listAllSportActivities: [],
  listEatenIngredient: [],
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}