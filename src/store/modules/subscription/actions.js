import {
    GetShopList
} from '@/api'

const getShopListAction = ({commit}, profile) => {
    GetShopList(profile)
        .then((response) => {
            const data = response.data
            commit('GET_SHOP_LIST', data.items)
        })
        .catch((error) => {
            commit('SET_ERROR',error)
            // eslint-disable-next-line
            console.error(error);
        })
}

export default {
    getShopListAction
}