import {
    GetListWater,
    GetListSleep,
    GetListWeight,
    GetListSport,
    ListAllSportActivities,
    ListEatenIngredient,
    CreateWater,
} from '@/api'

const getListWater = async ({commit}, args) => {
    await GetListWater(args.dateTo, args.profile)
    .then((response) => {
        const data = response.data
        commit('GET_LIST_WATER', data._embedded.items)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

const getListSleep = async ({commit}, args) => {
    await GetListSleep(args.dateTo, args.profile)
    .then((response) => {
        const data = response.data
        commit('GET_LIST_SLEEP', data)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

const getListWeight = async ({commit}, args) => {
    await GetListWeight(args.dateTo, args.profile)
    .then((response) => {
        const data = response.data
        commit('GET_LIST_WEIGHT', data)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

const getListSport = async ({commit}, args) => {
    await GetListSport(args.dateTo, args.profile)
    .then((response) => {
        const data = response.data
        commit('GET_LIST_SPORT', data._embedded.items)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

const listAllSportActivities = async ({commit}) => {
    await ListAllSportActivities()
    .then((response) => {
        const data = response.data
        commit('LIST_ALL_SPORT_ACTIVITIES', data.items)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

const listEatenIngredient = async ({commit}, args) => {
    await ListEatenIngredient(args.dateFrom, args.dateTo, args.profile)
    .then((response) => {
        const data = response.data
        commit('LIST_EATEN_INGREDIENT', data.items)
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

// eslint-disable-next-line
const createWater = async ({commit}, data) => {
    await CreateWater(data)
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
    })
}

export default {
    getListWater,
    getListSleep,
    getListWeight,
    getListSport,
    listAllSportActivities,
    listEatenIngredient,
    createWater,
}
