const RECIPES=(state,recipes)=>{
  state.recipes = recipes
}
const INGREDIENTS=(state,ingredients)=>{
  state.ingredients = ingredients
}
const ALL_INGREDIENTS=(state,allIngredients)=>{
  state.allIngredients = allIngredients
}
const PURCHASES=(state,purchases)=> {
    state.purchases = purchases
}
const SET_SHOP_LIST = (state, shopList) => {
  state.shopList = shopList
}

const GET_GENERATED_SUBSCRIPTION_MEALS = (state, generatedSubscriptionMeals) => {
  state.generatedSubscriptionMeals = generatedSubscriptionMeals
}

export default {
  RECIPES,
  INGREDIENTS,
  PURCHASES,
  ALL_INGREDIENTS,
  SET_SHOP_LIST,
  GET_GENERATED_SUBSCRIPTION_MEALS,
}