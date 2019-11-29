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

export default {
  LIST_MENUS,
  LIST_SUBSCRIPTIONS,
  MENU,
  MEALS,
  INGREDIENTS,
  INGREDIENT,
  SUBSCRIPTION
}