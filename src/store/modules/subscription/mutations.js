const RECIPES=(state,recipes)=>{
  state.recipes = recipes
}
const INGREDIENTS=(state,ingredients)=>{
  state.ingredients = ingredients
}
const PURCHASES=(state,purchases)=>{
  state.purchases = purchases
}

export default {
  RECIPES,
  INGREDIENTS,
  PURCHASES,
}