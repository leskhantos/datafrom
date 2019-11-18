import {
    GetShopList
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

export default {
    getShopListAction
}