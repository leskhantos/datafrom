const getListMenus = state => state.list_menus
const getListSubscriptions = state => state.list_subscriptions
const getMenu = state => state.menu
const getMeals = state => state.meals
const getIngredients = state => state.ingredients
const getIngredient = state => state.ingredient
const getSubscription = state => state.subscription

export default {
  getListMenus,
  getMenu,
  getMeals,
  getIngredients,
  getIngredient,
  getListSubscriptions,
  getSubscription
}
