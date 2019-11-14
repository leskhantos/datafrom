const isAuthenticated = state => !!state.token
const getPhone = state => state.phone
const getRegistrationInfo = state => state.registration_info
const getListProfiles = state => state.list_profiles

export default {
  isAuthenticated,
  getPhone,
  getRegistrationInfo,
  getListProfiles
}