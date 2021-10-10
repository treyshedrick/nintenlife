import * as U from '~redux/constants/user';

const initialState = {
  userState: null,
  error: null,
  username: '',
  email: '',
  id: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case U.USER_SIGNED_IN:
    case U.USER_LOGIN_SUCCESS:
    case U.USER_SIGNUP_SUCCESS:
      return {
        ...initialState,
        username: action.username,
        email: action.email,
        userState: action.type,
        id: action.id,
      };
    case U.USER_SIGNOUT_SUCCESS:
    case U.USER_LOGIN_REQUEST:
      return {
        ...state,
        userState: action.type,
      };
    case U.USER_SIGNUP_FAIL:
    case U.USER_LOGIN_FAIL:
      return {
        ...state,
        userState: action.type,
        error: action.error.message,
      };
    default:
      return state;
  }
};

export default user;
