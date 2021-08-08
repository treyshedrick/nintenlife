import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UserActions from '../../redux/actions/user';
import styles from './styles/form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableWithoutFeedback, Keyboard, Image} from 'react-native';
import {EyeIcon, LoadingIndicator} from '../shared/icons';
import logo from '../../../assets/logo.png';

const Login = ({navigation, user, actions}) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigateSignUp = () => {
    navigation.navigate('Signup');
  };

  const login = (username, password) => {
    actions.login(username, password);
  };

  const ShowPasswordIcon = props => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <EyeIcon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );

  const LoggingIn = user.userState === 'USER_LOGIN_REQUEST';

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.layout}>
        <Image source={logo} style={styles.centerLogo} />
        <Input
          style={styles.input}
          value={usernameValue}
          onChangeText={nextValue => setUsernameValue(nextValue)}
          label={evaProps => <Text {...evaProps}>Username</Text>}
        />
        <Input
          style={styles.input}
          value={passwordValue}
          secureTextEntry={secureTextEntry}
          accessoryRight={ShowPasswordIcon}
          onChangeText={nextValue => setPasswordValue(nextValue)}
          label={evaProps => <Text {...evaProps}>Password</Text>}
        />
        <View style={styles.btnCol}>
          <Button
            style={styles.btn}
            disabled={LoggingIn ? true : false}
            onPress={() => login(usernameValue, passwordValue)}>
            {!LoggingIn ? 'Login' : <LoadingIndicator />}
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
