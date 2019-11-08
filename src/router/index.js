import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '@/views/Login'
import Dashboard from "../views/Dashboard";
import UserPurchases from "../views/UserPurchases";
import LoginConfirm from "../views/LoginConfirm";
import AppRegistration from "../views/AppRegistration";
import RegistrationConfirm from "../views/RegistrationConfirm";

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        next()
        return
    }
    next('/')
}
const ifAuthenticated = (to, from, next) => {
    if (store.getters['user/isAuthenticated']) {
        next()
        return
    }
    next('/login')
}


export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: Dashboard,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/login_confirm',
            name: 'login_confirm',
            component: LoginConfirm,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/registration',
            name: 'registration',
            component: AppRegistration,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/registration_confirm',
            name: 'registration_confirm',
            component: RegistrationConfirm,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/purchases',
            name: 'purchases',
            component: UserPurchases,
            beforeEnter: ifAuthenticated
        },
    ],
    mode: 'history'
});
