import {
    GetShopList,
    GetGeneratedSubscriptionMeals,
} from '@/api'

const getShopListAction = async ({commit}, profile) => {
    await GetShopList(profile)
        .then((response) => {
            const data = response.data
            commit('SET_SHOP_LIST', data.items)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при получении данных')
        })
}

const getGeneratedSubscriptionMeals = async ({commit}, profile) => {
  await GetGeneratedSubscriptionMeals(profile)
    .then((response) => {
      const data = response.data
      commit('GET_GENERATED_SUBSCRIPTION_MEALS', data._embedded.items)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

export default {
    getShopListAction,
    getGeneratedSubscriptionMeals,
}