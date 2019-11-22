const LIST_MENUS = (state, list_menus) => {
  state.list_menus = list_menus
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

export default {
  LIST_MENUS,
  MENU,
  MEALS,
  INGREDIENTS
}