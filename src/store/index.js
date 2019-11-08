import Vue from 'vue'
import Vuex from 'vuex'
import errorModule from './modules/error'
import userModule from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: userModule,
        error: errorModule
    },
})