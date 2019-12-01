import axios from 'axios'
import qs from 'qs'

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

export function ListProfiles() {
  return axios.get(Settings.host + '/api/v1/profiles/self')
}

export function GetProfile(id) {
  return axios.get(Settings.host + '/api/v1/profiles/' + id)
}

export function GetShopList(profile) {
  return axios.get(Settings.host + '/api/v1/subscription/shop_list/' + profile)
}

export function GetUserInfo() {
  return axios.get(Settings.host + '/api/v1/accounts/self')
}

export function CreateProfile(profile) {
  return axios.post(Settings.host + '/api/v1/profiles', profile)
}

export function GetNutrients(weight, height, age, gender, target, fatsPercentage, proteinsPercentage, carbohydratesPercentage) {
  return axios.get(Settings.host + '/api/v1/nutrients/calculate?' + qs.stringify({
    'weight': weight,
    'height': height,
    'age': age,
    'gender': gender,
    'target': target,
    'fatsPercentage': fatsPercentage,
    'proteinsPercentage': proteinsPercentage,
    'carbohydratesPercentage': carbohydratesPercentage,
  }))
}

export function GetProfileNutrients(profile, fastPercentage, proteinsPercentage, carbohydratesPercentage) {
  return axios.get(Settings.host + '/api/v1/nutrients/calculate/profile?' + qs.stringify({
    'profile': profile,
    'fastPercentage': fastPercentage,
    'proteinsPercentage': proteinsPercentage,
    'carbohydratesPercentage': carbohydratesPercentage,
  }))
}

export function GetListWater(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/water/list?' + qs.stringify({
    'dateTo': dateTo,
    'profile': profile,
  }))
}

export function GetListSleep(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/sleep/list?' + qs.stringify({
    'dateTo': dateTo,
    'profile': profile,
  }))
}

export function GetListWeight(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/weight/list?' + qs.stringify({
    'dateTo': dateTo,
    'profile': profile,
  }))
}

export function GetListSport(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/sport/list?' + qs.stringify({
    'dateTo': dateTo,
    'profile': profile,
  }))
}

export function ListAllSportActivities() {
  return axios.get(Settings.host + '/api/v1/diary/sport/list')
}

export function ListEatenIngredient(dateFrom, dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/eaten-ingredient/list?' + qs.stringify({
    'dateFrom': dateFrom,
    'dateTo': dateTo,
    'profile': profile,
  }))
}

export function GetGeneratedSubscriptionMeals(profile) {
  return axios.get(Settings.host + '/api/v1/subscription/meals/' + profile)
}

export function CalculateWeight(recipe, weight) {
  return axios.get(Settings.host + '/api/v1/recipe/calculate-weight?' + qs.stringify({
    recipe,
    weight
  }))
}

export function GetIngredient(ingredientId) {
   return axios.get(Settings.host + '/api/v1/ingredients/' + ingredientId)
}

export function CreateWater(data) {
    return axios.post(Settings.host + '/api/v1/diary/water', data)
}