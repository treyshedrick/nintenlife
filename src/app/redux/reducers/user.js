import * as U from '../constants/user';

const initialState = {
  userState: null,
  username: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case U.USER_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        userState: action.type,
      };
    default:
      return state;
  }
};

export default user;
