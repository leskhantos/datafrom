import axios from 'axios'

const Settings = {
    host: process.env.VUE_APP_API_HOST
}

export function SetTokenHeaders(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
export function SendSMSLogin(phone) {
    return axios.post(Settings.host + '/api/v1/request-sms/user-login', phone)
}
export function Login(data) {
    return axios.post(Settings.host + '/api/v1/security/generate-user-access-token', data)
}
export function Registration(data) {
    return axios.post(Settings.host + '/api/v1/security/create-account', data)
}
export function SendSMSRegistration(phone) {
    return axios.post(Settings.host + '/api/v1/request-sms/account-creation', phone)
}
export function GetSubscription(profile) {
    return axios.get(Settings.host + '/api/v1/subscription/shop_list/'+profile+'?'+'dateFrom=2019-11-05&dateTo=2019-11-11')
}