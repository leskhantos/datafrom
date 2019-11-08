const SET_OK = (state, ok) => {
  state.ok = ok
};
const SET_ERROR = (state, err) => {
  state.error = err
};
const CLEAR_ALL = (state) => {
  state.error = null
  state.ok = null
};

export default {
  SET_OK,
  SET_ERROR,
  CLEAR_ALL
}
