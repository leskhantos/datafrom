const TOKEN_UPDATED = (state, token) => {
  state.token = token
}
const PHONE = (state, phone) => {
  state.phone = phone
}
const REGISTRATION_INFO = (state, registration_info) => {
  state.registration_info = registration_info
}
const PROFILE_INFO = (state, profile_info) => {
  state.profile_info = profile_info
}
const LIST_PROFILES = (state, list_profiles) => {
  state.list_profiles = list_profiles
}
const MAIN_PROFILE = (state, main_profile) => {
  state.main_profile = main_profile
}
const PROFILE = (state, profile) => {
  state.profile = profile
}
const USER_INFO = (state, user_info) => {
  state.user_info = user_info
}
const NUTRIENTS = (state, nutrients) => {
  state.nutrients = nutrients
}
const HAS_PROFILES = (state, has_profiles) => {
  state.has_profiles = has_profiles
}
const IMAGE = (state, image) => {
  state.image = image
}
export default {
  TOKEN_UPDATED,
  PHONE,
  REGISTRATION_INFO,
  LIST_PROFILES,
  MAIN_PROFILE,
  PROFILE,
  USER_INFO,
  PROFILE_INFO,
  HAS_PROFILES,
  NUTRIENTS,
  IMAGE
}