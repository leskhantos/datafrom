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

export function ListProfiles() {
  return axios.get(Settings.host + '/api/v1/profiles/self')
}

export function GetProfile(id) {
  return axios.get(Settings.host + '/api/v1/profiles/' + id)
}

export function GetShopList(date) {
    return axios.get(Settings.host + '/api/v1/subscription/shop_list'+date)
}
export function AddCustomShopItem(payload) {
  return axios.post(Settings.host + '/api/v1/ccustom', payload)
}
export function GetIngredientsList(search) {
  return axios.get(Settings.host + '/api/v1/ingredients?title=' + search)
}
export function SetBoughtIngredient(shopItem) {
  return axios.put(Settings.host + '/api/v1/subscription/shop_list/' + shopItem + '/buy')
}

export function GetUserInfo() {
  return axios.get(Settings.host + '/api/v1/accounts/self')
}

export function CreateProfile(profile) {
  return axios.post(Settings.host + '/api/v1/profiles', profile)
}

export function GetNutrients(weight, height, age, gender, target, fatsPercentage, proteinsPercentage, carbohydratesPercentage, activity) {
  return axios.get(Settings.host + '/api/v1/nutrients/calculate?weight=' + weight + '&height=' + height + '&age=' + age
    + '&gender=' + gender + '&target=' + target + '&fatsPercentage=' + fatsPercentage + '&proteinsPercentage=' + proteinsPercentage
    + '&carbohydratesPercentage=' + carbohydratesPercentage + '&activity=' + activity)
}

export function EditProfile(id, profile) {
  return axios.put(Settings.host + '/api/v1/profiles/' + id, profile)
}

export function UploadImage(image) {
  return axios.post(Settings.host + '/api/v1/uploads/profile-avatar', image)
}

export function ListMenus() {
  return axios.get(Settings.host + '/api/v1/menus')
}

export function GetMenu(id) {
  return axios.get(Settings.host + '/api/v1/menus/' + id)
}

export function GetMeals(menuId, menuProportionId) {
  return axios.get(Settings.host + '/api/v1/menus/'+menuId+'/proportions/'+menuProportionId+'/meals')
}

export function GetIngredients(recipe, weight) {
  return axios.get(Settings.host + '/api/v1/recipe/calculate-weight?recipe='+recipe+'&weight='+weight)
}

export function ListSubscriptions() {
  return axios.get(Settings.host + '/api/v1/subscriptions')
}

export function CreateSubscription(subscription) {
  return axios.post(Settings.host + '/api/v1/subscription/subscribe', subscription)
}

export function GetIngredient(id) {
  return axios.get(Settings.host + '/api/v1/ingredients/'+ id)
}
