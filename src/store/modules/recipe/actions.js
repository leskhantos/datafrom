import {
  CalculateWeight
} from '@/api'

const calculateWeight = async ({commit}, args) => {
  await CalculateWeight(args.recipe, args.weight)
    .then((response) => {
      const data = response.data
      commit('CALCULATE_WEIGHT', data)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

export default {
  calculateWeight,
}