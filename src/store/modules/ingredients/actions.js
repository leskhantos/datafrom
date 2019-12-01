import {
    GetIngredient
} from '@/api'

const getIngredient = async ({commit}, args) => {
    await GetIngredient(args.ingredient)
    .then((response) => {
        const data = response.data
        commit('GET_INGREDIENT', data)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

export default {
    getIngredient
}
