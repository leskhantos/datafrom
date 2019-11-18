import Vue from 'vue'
import Vuex from 'vuex'
import errorModule from './modules/error'
import userModule from './modules/user'
import subscriptionModule from './modules/subscription'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: userModule,
        error: errorModule,
        subscription: subscriptionModule
    },
})