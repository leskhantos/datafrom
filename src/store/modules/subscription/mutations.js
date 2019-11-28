const RECIPES=(state,recipes)=>{
  state.recipes = recipes
}
const INGREDIENTS=(state,ingredients)=>{
  state.ingredients = ingredients
}
const ALL_INGREDIENTS=(state,allIngredients)=>{
  state.allIngredients = allIngredients
}
const PURCHASES=(state,purchases)=>{
  state.purchases = purchases
}

export default {
  RECIPES,
  INGREDIENTS,
  PURCHASES,
  ALL_INGREDIENTS
}