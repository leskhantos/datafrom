import {
    Login,
    SetTokenHeaders,
    Registration,
    SendSMSLogin,
    SendSMSRegistration
} from '@/api'
import VueCookies from 'vue-cookies'

const loginConfirm = ({commit}, payload) => {
    return Login(payload)
        .then((response) => {
            const token = response.data.accessToken
            commit('TOKEN_UPDATED', token)
            SetTokenHeaders(token)
            VueCookies.set('Authorization', token, {expires: 1})
        })
        .catch((error) => {
            commit('SET_ERROR',error)
            // eslint-disable-next-line
            console.error(error);
            throw "Неверный номер или код";
        })
}

const logout = ({commit}) => {
    return new Promise((resolve) => {
        VueCookies.remove('Authorization')
        commit('TOKEN_UPDATED', null)
        resolve()
    })
}

const registrationConfirm = ({commit}, payload) => {
    return Registration(payload)
        .then((response) => {
            // eslint-disable-next-line
            console.log(response.data)
        })
        .catch((error) => {
            commit('SET_ERROR',error)
            // eslint-disable-next-line
            console.error(error);
            throw "Регистрация не прошла";
        })
}


const sendSMSRegistration = ({commit}, phone) => {
    return SendSMSRegistration(phone)
        .then((response) => {
            // eslint-disable-next-line
            console.log(response.data)
        })
        .catch((error) => {
            commit('SET_ERROR',error)
            // eslint-disable-next-line
                console.log(error.response.data.status);
        })
}
const sendSMSLogin = ({commit}, phone) => {
    return SendSMSLogin(phone)
        .then((response) => {
            // eslint-disable-next-line
            console.log(response.data)
        })
        .catch((error) => {
            commit('SET_ERROR',error)
            throw "Ошибка в заполнении формы"
            // eslint-disable-next-line
            console.error(error);
        })
}
export default {
    loginConfirm,
    registrationConfirm,
    logout,
    sendSMSLogin,
    sendSMSRegistration
}