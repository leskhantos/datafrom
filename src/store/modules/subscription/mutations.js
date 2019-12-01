const SET_SHOP_LIST = (state, shopList) => {
  state.shopList = shopList
}

const GET_GENERATED_SUBSCRIPTION_MEALS = (state, generatedSubscriptionMeals) => {
  state.generatedSubscriptionMeals = generatedSubscriptionMeals
}

export default {
  SET_SHOP_LIST,
  GET_GENERATED_SUBSCRIPTION_MEALS,
}