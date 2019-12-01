import {
  Login,
  SetTokenHeaders,
  Registration,
  SendSMSLogin,
  SendSMSRegistration,
  ListProfiles,
  GetProfile,
  GetUserInfo,
  CreateProfile,
  GetNutrients
} from '@/api'
import VueCookies from 'vue-cookies'
import {EditProfile} from "../../../api";

const loginConfirm = ({commit}, payload) => {
  return Login(payload)
    .then((response) => {
      const token = response.data.accessToken
      commit('TOKEN_UPDATED', token)
      SetTokenHeaders(token)
      VueCookies.set('Authorization', token, {expires: 1})
    })
    .catch((error) => {
      commit('SET_ERROR', error)// eslint-disable-next-line
      console.error(error);
      throw "Неверный номер или код";
    })
}

const logout = ({commit}) => {
  return new Promise((resolve) => {
    VueCookies.remove('Authorization')
    commit('TOKEN_UPDATED', null)
    commit('HAS_PROFILES', 0);
    resolve()
  })
}

const registrationConfirm = ({commit}, payload) => {
  return Registration(payload)
    .then((response) => {
      const token = response.data.accessToken
      commit('TOKEN_UPDATED', token)
      SetTokenHeaders(token)
      VueCookies.set('Authorization', token, {expires: 1})
    })
    .catch(() => {
      throw "Регистрация не прошла";
    })
}

const createProfile = ({commit}, payload) => {
  return CreateProfile(payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      commit('SET_ERROR', error)
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
      commit('SET_ERROR', error)
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
      commit('SET_ERROR', error)
      throw "Ошибка в заполнении формы"
      // eslint-disable-next-line
      console.error(error);
    })
}
const getListProfiles = async ({commit}) => {
  await ListProfiles()
    .then((response) => {
      const data = response.data._embedded
      Object.keys(data.items).forEach(function (key) {
        if (data.items[key].avatar == null) {
          data.items[key].avatar = {'path': '/static/images/svg/user.svg'}
        }
      })
      commit('LIST_PROFILES', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}
const getMainProfile = async ({commit}) => {
  await ListProfiles()
    .then((response) => {
      const data = response.data._embedded.items
      let mainProfile = {};
      Object.keys(data).forEach(function (key) {
        if (data[key].isMain) {
          if (data[key].avatar == null) {
            data[key].avatar = {'path': '/static/images/svg/user.svg'}
          }
          mainProfile = data[key];
        }
      })
      commit('MAIN_PROFILE', mainProfile)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}

const getProfile = async ({commit}, id) => {
  await GetProfile(id)
    .then((response) => {
      const data = response.data
      if (data.avatar == null) {
        data.avatar = {'path': '/static/images/svg/user.svg'}
      }
      commit('PROFILE', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
}
const getUserInfo = async ({commit}) => {
  await GetUserInfo()
    .then((response) => {
      const data = response.data
      commit('USER_INFO', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}
const getNutrients = async ({commit}, profile) => {
  await GetNutrients(profile.weight, profile.height, profile.age,
    profile.gender, profile.target, profile.fatsPercentage,
    profile.proteinsPercentage, profile.carbohydratesPercentage, profile.activity)
    .then((response) => {
      const data = response.data
      commit('NUTRIENTS', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}

const editProfile = (non, profile) => {
  EditProfile(profile.id, profile.payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
      throw "Ошибка в заполнении формы";
    })
}

export default {
  loginConfirm,
  registrationConfirm,
  logout,
  sendSMSLogin,
  sendSMSRegistration,
  getListProfiles,
  getMainProfile,
  getProfile,
  getUserInfo,
  createProfile,
  getNutrients,
  editProfile
}
