import {
  Login,
  SetTokenHeaders,
  Registration,
  SendSMSLogin,
  SendSMSRegistration,
  ListProfiles
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

const registrationConfirm = (non, payload) => {
  return Registration(payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
      throw "Регистрация не прошла";
    })
}


const sendSMSRegistration = (non, phone) => {
  return SendSMSRegistration(phone)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      throw "Ошибка в заполнении формы"
      // eslint-disable-next-line
      console.error(error);
    })
}
const sendSMSLogin = (non, phone) => {
  return SendSMSLogin(phone)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      throw "Ошибка в заполнении формы"
      // eslint-disable-next-line
      console.error(error);
    })
}
const getListProfiles = async ({commit}) => {
  await ListProfiles()
    .then((response) => {
      const data = response.data._embedded
      commit('LIST_PROFILES', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}
export default {
  loginConfirm,
  registrationConfirm,
  logout,
  sendSMSLogin,
  sendSMSRegistration,
  getListProfiles
}