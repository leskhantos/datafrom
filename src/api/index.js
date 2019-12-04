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

export function SubscriptionsByMenu(menu) {
  return axios.get(Settings.host + '/api/v1/subscription/find/' + menu)
}

export function CreateSubscription(subscription) {
  return axios.post(Settings.host + '/api/v1/subscription/subscribe', subscription)
}

export function EditSubscription(subscription) {
  return axios.put(Settings.host + '/api/v1/subscription/' + subscription.id, {mealTypes: subscription.mealTypes})
}

export function AddMealsToSub(meals) {
  return axios.post(Settings.host + '/api/v1/subscription/add_meals', meals)
}

export function GetMealsByProfile(profile) {
  return axios.get(Settings.host + '/api/v1/subscription/meals/' + profile + '/types')
}

export function EditPortions(subId, portions) {
  return axios.post(Settings.host + '/api/v1/subscription/meals/' + subId + '/add_guests', {portionsCount: portions})
}

export function GetIngredient(id) {
    return axios.get(Settings.host + '/api/v1/ingredients/' + id)
}

export function GetNutrients(weight, height, age, gender, target, fatsPercentage, proteinsPercentage, carbohydratesPercentage, activity) {
  return axios.get(Settings.host + '/api/v1/nutrients/calculate?' + qs.stringify({
      weight,
      height,
      age,
      gender,
      target,
      fatsPercentage,
      proteinsPercentage,
      carbohydratesPercentage,
      activity
  }))
}

export function GetProfileNutrients(profile, fastPercentage, proteinsPercentage, carbohydratesPercentage) {
  return axios.get(Settings.host + '/api/v1/nutrients/calculate/profile?' + qs.stringify({
      profile,
      fastPercentage,
      proteinsPercentage,
      carbohydratesPercentage,
  }))
}

export function GetListWater(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/water/list?' + qs.stringify({
      dateTo,
      profile,
  }))
}

export function GetListSleep(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/sleep/list?' + qs.stringify({
      dateTo,
      profile,
  }))
}

export function GetListWeight(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/weight/list?' + qs.stringify({
      dateTo,
      profile,
  }))
}

export function GetListSport(dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/sport/list?' + qs.stringify({
      dateTo,
      profile,
  }))
}

export function ListAllSportActivities() {
  return axios.get(Settings.host + '/api/v1/diary/sport/list')
}

export function ListEatenIngredient(dateFrom, dateTo, profile) {
  return axios.get(Settings.host + '/api/v1/diary/eaten-ingredient/list?' + qs.stringify({
      dateFrom,
      dateTo,
      profile,
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

export function CreateWater(data) {
    return axios.post(Settings.host + '/api/v1/diary/water', data)
}

export function ListWaterForOneDay(data) {
    return axios.get(Settings.host + '/api/v1/diary/water/one-day?' + qs.stringify(data))
}

export function ListSportForOneDay(data) {
    return axios.get(Settings.host + '/api/v1/diary/sport/one-day?' + qs.stringify(data))
}

export function GetSubsForOneDay(data) {
    return axios.get(Settings.host + '/api/v1/subscription/meals/profile/one-day?' + qs.stringify(data))
}
