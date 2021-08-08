import * as U from '../constants/user';

const initialState = {
  userState: null,
  username: '',
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case U.USER_SIGNED_IN:
      return {
        ...state,
        username: action.username,
        email: action.email,
        userState: action.type,
      };
    case U.USER_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        userState: action.type,
      };
    case U.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        userState: action.type,
      };
    case U.USER_SIGNOUT_SUCCESS:
      return {
        ...initialState,
        userState: action.type,
      };
    case U.USER_LOGIN_REQUEST:
      return {
        ...state,
        userState: action.type,
      };
    case U.USER_LOGIN_FAIL:
      return {
        ...state,
        userState: action.type,
      };
    default:
      return state;
  }
};

export default user;
