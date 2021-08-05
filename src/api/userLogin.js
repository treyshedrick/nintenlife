import {Auth} from 'aws-amplify';

export async function signUp(username, password, email) {
  try {
    const {user} = await Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export async function signOut() {
  try {
    await Auth.signOut();
    console.log('user signed out');
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    console.log(user);
    return user;
  } catch (error) {
    console.log('error signing in', error);
  }
}

export async function currentAuthenticatedUser() {
  try {
    const response = await Auth.currentAuthenticatedUser();
    return response;
  } catch (error) {
    console.log('Error!', error);
    throw error;
  }
}
