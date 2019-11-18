
const SET_SHOP_LIST = (state, shopList) => {
  state.shopList = shopList
}
const SET_FILTERED_SHOP_LIST =(state,filteredShopList)=>{
  state.filteredShopList = filteredShopList
}
export default {
  SET_SHOP_LIST: SET_SHOP_LIST,
  SET_FILTERED_SHOP_LIST
}