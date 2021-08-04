import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';
import styles from './styles/form';
import {connect} from 'react-redux';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const Login = ({navigation, user}) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    UA.currentAuthenticatedUser()
      .then(response => {
        if (response?.username.length > 1) {
          setIsLoggedIn(true);
          navigateHome();
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  const navigateSignUp = () => {
    navigation.navigate('Signup');
  };

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const login = (username, password) => {
    UA.signIn(username, password)
      .then(response => {
        if (response?.username.length > 1) {
          console.log('This should go Home');
          navigateHome();
        }
      })
      .catch(err => {
        console.log(err);
      });
    // will return user info and dispatch to redux
  };

  console.log(user);

  return (
    <>
      {isLoaded === true && isLoggedIn === false ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Layout style={styles.layout}>
            <Text category="h1" style={styles.center}>
              NintenLife
            </Text>
            <Input
              style={styles.input}
              value={usernameValue}
              onChangeText={nextValue => setUsernameValue(nextValue)}
              label={evaProps => <Text {...evaProps}>Username</Text>}
            />
            <Input
              style={styles.input}
              value={passwordValue}
              onChangeText={nextValue => setPasswordValue(nextValue)}
              label={evaProps => <Text {...evaProps}>Password</Text>}
            />
            <View style={styles.btnRow}>
              <Button
                style={styles.btn}
                onPress={() => login(usernameValue, passwordValue)}>
                Login
              </Button>
              <Button style={styles.btn} onPress={navigateSignUp}>
                Sign Up
              </Button>
            </View>
          </Layout>
        </TouchableWithoutFeedback>
      ) : (
        <Layout style={styles.layout} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Login);
