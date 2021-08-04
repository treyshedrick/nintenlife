import * as U from '../constants/user';
import * as UA from '../../../auth/userLogin';
import ReduxThunk from 'redux-thunk';

export const login = (username, password) => {
  return dispatch =>
    UA.signIn(username, password)
      .then(response => {
        console.log(response);
        dispatch({type: U.USER_LOGIN_SUCCESS, user: response.username});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: U.USER_LOGIN_FAIL, error: err});
      });
};
