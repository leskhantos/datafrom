import {
    GetShopList
} from '@/api'

const getShopListAction = ({commit}, profile) => {
    GetShopList(profile)
        .then((response) => {
            const data = response.data
            commit('GET_SHOP_LIST', data.items)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при получении данных')
        })
}

export default {
    getShopListAction
}