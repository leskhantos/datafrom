const GET_LIST_WATER = (state, listWater) => {
    state.listWater = listWater
}

const GET_LIST_SLEEP = (state, listSleep) => {
    state.listSleep = listSleep
}

const GET_LIST_WEIGHT = (state, listWeight) => {
    state.listWeight = listWeight
}

const GET_LIST_SPORT = (state, listSport) => {
    state.listSport = listSport
}

const LIST_ALL_SPORT_ACTIVITIES = (state, listAllSportActivities) => {
    state.listAllSportActivities = listAllSportActivities
}

const LIST_EATEN_INGREDIENT = (state, listEatenIngredient) => {
    state.listEatenIngredient = listEatenIngredient
}

const LIST_WATER_FOR_ONE_DAY = (state, listWaterForOneDay) => {
    state.listWaterForOneDay = listWaterForOneDay
}

const LIST_SPORT_FOR_ONE_DAY = (state, listSportForOneDay) => {
    state.listSportForOneDay = listSportForOneDay
}

export default {
    GET_LIST_WATER,
    GET_LIST_SLEEP,
    GET_LIST_WEIGHT,
    GET_LIST_SPORT,
    LIST_ALL_SPORT_ACTIVITIES,
    LIST_EATEN_INGREDIENT,
    LIST_WATER_FOR_ONE_DAY,
    LIST_SPORT_FOR_ONE_DAY,
}
