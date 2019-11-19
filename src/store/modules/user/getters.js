const isAuthenticated = state => !!state.token
const getPhone = state => state.phone
const getRegistrationInfo = state => state.registration_info
const getProfileInfo = state => state.profile_info
const getListProfiles = state => state.list_profiles
const getMainProfile = state => state.main_profile
const getProfile = state => state.profile
const hasProfiles = state => state.has_profiles

export default {
  isAuthenticated,
  getPhone,
  getRegistrationInfo,
  getListProfiles,
  getMainProfile,
  getProfile,
  getProfileInfo,
  hasProfiles
}