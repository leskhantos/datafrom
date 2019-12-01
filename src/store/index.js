import Vue from 'vue'
import Vuex from 'vuex'
import errorModule from './modules/error'
import userModule from './modules/user'
import subscriptionModule from './modules/subscription'
import nutrientsModule from './modules/nutrients'
import diaryModule from './modules/diary'
import recipeModule from './modules/recipe'
import ingredientModule from './modules/ingredients'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: userModule,
        error: errorModule,
        subscription: subscriptionModule,
        nutrients: nutrientsModule,
        diary: diaryModule,
        recipe: recipeModule,
        ingredients: ingredientModule,
    },
})