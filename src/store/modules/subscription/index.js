import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  recipes:{},
  ingredients:{},
  purchases:{},
  weight: 0,
  allIngredients: [],
  shopList:[],
  generatedSubscriptionMeals: [],
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
