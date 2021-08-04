import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';
import * as UserActions from '../redux/actions/user';
import styles from './styles/form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {USER_SIGNOUT_SUCCESS} from '../redux/constants/user';

const Login = ({navigation, user, actions}) => {
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
    actions
      .login(username, password)
      .then(response => {
        if (response?.username.length > 1) {
          setUsernameValue('');
          setPasswordValue('');
          navigateHome();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      {(isLoaded === true && isLoggedIn === false) ||
      user.userState === USER_SIGNOUT_SUCCESS ? (
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

const ActionCreators = Object.assign({}, UserActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
