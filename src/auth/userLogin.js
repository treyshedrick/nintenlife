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
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
