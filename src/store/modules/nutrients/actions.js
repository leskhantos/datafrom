import {
    GetProfileNutrients
} from '@/api'

const getProfileNutrients = async ({commit}, args) => {
    await GetProfileNutrients(args.profile, args.fastPercentage, args.proteinsPercentage, args.carbohydratesPercentage)
        .then((response) => {
            const data = response.data
            commit('GET_PROFILE_NUTRIENTS', data)
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
        })
}

export default {
    getProfileNutrients
}
