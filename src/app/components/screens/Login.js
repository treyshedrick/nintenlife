import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UserActions from '~redux/actions/user';
import sharedStyles from '~shared/styles/form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
} from 'react-native';
import {EyeIcon, LoadingIndicator} from '~shared/icons';
import logo from '~assets/logo.png';

const Login = ({navigation, user, actions}) => {
  const styles = StyleSheet.create({
    errorBox: {
      height: 15,
    },
    errorText: {
      fontSize: 12,
      color: 'red',
      textAlign: 'center',
    },
  });

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigateSignUp = () => {
    navigation.navigate('Signup');
  };

  const login = (username, password) => {
    if (usernameValue.length > 0 && passwordValue.length > 0) {
      return actions.login(username, password);
    }
  };

  const ShowPasswordIcon = props => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <EyeIcon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );

  const loggingIn = user.userState === 'USER_LOGIN_REQUEST';
  const logInFail = user.userState === 'USER_LOGIN_FAIL';

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={sharedStyles.layout}>
        <Image source={logo} style={sharedStyles.centerLogo} />
        <View style={styles.errorBox}>
          {logInFail && (
            <Text style={styles.errorText}>
              Log in attempt failed. Please try again.
            </Text>
          )}
        </View>
        <Input
          style={sharedStyles.input}
          value={usernameValue}
          onChangeText={nextValue => setUsernameValue(nextValue)}
          label={evaProps => <Text {...evaProps}>Username</Text>}
        />
        <Input
          style={sharedStyles.input}
          value={passwordValue}
          secureTextEntry={secureTextEntry}
          accessoryRight={ShowPasswordIcon}
          onChangeText={nextValue => setPasswordValue(nextValue)}
          label={evaProps => <Text {...evaProps}>Password</Text>}
        />
        <View style={sharedStyles.btnCol}>
          <Button
            style={sharedStyles.btn}
            disabled={loggingIn ? true : false}
            onPress={() => login(usernameValue, passwordValue)}>
            {!loggingIn ? 'Login' : <LoadingIndicator />}
          </Button>
          <Button appearance="ghost" onPress={navigateSignUp}>
            Need an account? Sign Up
          </Button>
        </View>
      </Layout>
    </TouchableWithoutFeedback>
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
