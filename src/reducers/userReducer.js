import {SET_USER, REMOVE_USER, SIGN_IN_USER} from "../actions/userActions";

const INIT_VALUES = {
  data: {
    email: '',
  },
  signed_in: false
};

const SIGN_IN_VALUES = (user) => {
  return {
    data: {
      email: user.email
    },
    signed_in: true
  }
}
const userReducer = (state = INIT_VALUES, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.values};
    case SIGN_IN_USER:
      return SIGN_IN_VALUES(action.values);
    case REMOVE_USER:
      return INIT_VALUES;
    default:
      return {...state};
  }
};

export default userReducer;