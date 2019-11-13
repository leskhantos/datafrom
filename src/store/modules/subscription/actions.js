import {
    GetSubscription
} from '@/api'

const getSubscriptionAction = ({commit}, profile) => {
    GetSubscription(profile)
        .then((response) => {
            const data = response.data
            commit('GET_SUBSCRIPTION', data.items)
        })
        .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
        })
}

export default {
    getSubscriptionAction
}