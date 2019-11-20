const isAuthenticated = state => !!state.token
const getPhone = state => state.phone
const getRegistrationInfo = state => state.registration_info
const getListProfiles = state => state.list_profiles
const getMainProfile = state => state.main_profile
const getProfile = state => state.profile

export default {
  isAuthenticated,
  getPhone,
  getRegistrationInfo,
  getListProfiles,
  getMainProfile,
  getProfile
}