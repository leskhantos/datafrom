import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '@/views/Login'
import Dashboard from "../views/Dashboard";
import UserPurchases from "../views/UserPurchases";
import LoginConfirm from "../views/LoginConfirm";
import AppRegistration from "../views/AppRegistration";
import RegistrationConfirm from "../views/RegistrationConfirm";
import Profile from "../views/Profile";
import RegistrationProfile from "../views/RegistrationProfile";
import Menu from "../views/Menu";
import MenuSubscription from "../views/MenuSubscription";
import UserDiary from "../views/UserDiary";

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
        let hasProfiles = store.getters['user/hasProfiles']
        if (hasProfiles === 0) {
            store.dispatch('user/getListProfiles').then(()=>{
                if(store.getters['user/getListProfiles'].items.length !== 0){
                    hasProfiles = 2
                    store.commit('user/HAS_PROFILES', hasProfiles);
                    next()
                }else{
                    hasProfiles = 1
                    store.commit('user/HAS_PROFILES', hasProfiles);
                    next('/profile_create')
                }
            })
        }else if(hasProfiles === 1){
            next('/profile_create')

        }else{
            next()
        }
    }else{
        next('/login')
    }
}
const ifAuthenticatedFirst = (to, from, next) => {
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
        {
            path: '/profile/:id',
            name: 'profile',
            props: true,
            component: Profile,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/profile_create',
            name: 'profile_create',
            props: true,
            component: RegistrationProfile,
            beforeEnter: ifAuthenticatedFirst
        },
        {
            path: '/menu',
            name: 'menu',
            props: true,
            component: Menu,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/subscribe/:id',
            name: 'menuSubs',
            props: true,
            component: MenuSubscription,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/diary',
            name: 'diary',
            props: false,
            component: UserDiary,
            beforeEnter: ifAuthenticated
        }
    ],
    mode: 'history'
});
