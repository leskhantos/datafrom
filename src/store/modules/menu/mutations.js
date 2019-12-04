const LIST_MENUS = (state, list_menus) => {
  state.list_menus = list_menus
}
const LIST_SUBSCRIPTIONS = (state, list_subscriptions) => {
  state.list_subscriptions = list_subscriptions
}
const MENU = (state, menu) => {
  state.menu = menu
}
const MEALS = (state, meals) => {
  state.meals = meals
}
const INGREDIENTS = (state, ingredients) => {
  state.ingredients = ingredients
}
const INGREDIENT = (state, ingredient) => {
  state.ingredient = ingredient
}
const SUBSCRIPTION = (state, subscription) => {
  state.subscription = subscription
}
const PROFILE_MEALS = (state, meals) => {
  state.profileMeals = [...state.profileMeals, meals]
}
const PROFILE_MEALS_CLEAR = (state) => {
  state.profileMeals = []
}

export default {
  LIST_MENUS,
  LIST_SUBSCRIPTIONS,
  MENU,
  MEALS,
  INGREDIENTS,
  INGREDIENT,
  SUBSCRIPTION,
  PROFILE_MEALS,
  PROFILE_MEALS_CLEAR
}
