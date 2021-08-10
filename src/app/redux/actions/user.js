import * as U from '../constants/user';
import {Auth} from 'aws-amplify';

export const login = (username, password) => dispatch => {
  dispatch({type: U.USER_LOGIN_REQUEST});
  Auth.signIn(username, password)
    .then(user => {
      console.log('Successful login dispatch');
      dispatch({
        type: U.USER_LOGIN_SUCCESS,
        username: user.username,
        email: user.attributes.email,
      });
      return user;
    })
    .catch(err => {
      console.log('Error: ', err);
      dispatch({type: U.USER_LOGIN_FAIL, error: err.message});
    });
};

export const signOut = () => {
  return dispatch =>
    Auth.signOut()
      .then(() => {
        console.log('Successful signout dispatch');
        dispatch({
          type: U.USER_SIGNOUT_SUCCESS,
        });
        return;
      })
      .catch(err => {
        console.log('Error: ', err);
        dispatch({type: U.USER_SIGNOUT_FAIL, error: err});
      });
};

export const signUp = (username, password, email) => {
  return dispatch =>
    Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email,
      },
    })
      .then(response => {
        console.log('Successful SignUp dispatch');
        dispatch({
          type: U.USER_SIGNUP_SUCCESS,
          username: response.user.username,
        });
        Auth.signIn(username, password);
        console.log(response.user);
        return response.user;
      })
      .catch(err => {
        console.log('Error: ', err);
        dispatch({type: U.USER_SIGNUP_FAIL, error: err});
      });
};

export const currentAuthenticatedUser = () => {
  return dispatch =>
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('Checked user auth');
        dispatch({
          type: U.USER_SIGNED_IN,
          username: user.username,
          email: user.attributes.email,
        });
        return;
      })
      .catch(err => {
        console.log('Error: ', err);
        dispatch({type: U.USER_SIGNED_OUT, error: err});
      });
};
