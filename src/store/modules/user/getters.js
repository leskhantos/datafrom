const isAuthenticated = state => !!state.token
const getPhone = state => state.phone
const getRegistrationInfo = state => state.registration_info

export default {
  isAuthenticated,
  getPhone,
  getRegistrationInfo
}