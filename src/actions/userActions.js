export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SIGN_IN_USER = "SIGN_IN_USER";

export const setUser = (values) => (dispatch) => {
  return dispatch({type: SET_USER, values: values})
};

export const removeUser = () => (dispatch) => {
  return dispatch({type: REMOVE_USER})
};

export const signInUser = (user) => (dispatch) => {
  return dispatch({type: SIGN_IN_USER, values: user})
};