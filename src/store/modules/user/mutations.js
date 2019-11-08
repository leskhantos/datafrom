const TOKEN_UPDATED = (state, token) => {
  state.token = token
}
const PHONE = (state, phone) => {
  state.phone = phone
}
const REGISTRATION_INFO = (state, registration_info) => {
  state.registration_info = registration_info
}
export default {
  TOKEN_UPDATED,
  PHONE,
  REGISTRATION_INFO
}