import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UserActions from '../../redux/actions/user';
import styles from './styles/form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {EyeIcon} from '../shared/icons';

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

  return (
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
          secureTextEntry={secureTextEntry}
          accessoryRight={ShowPasswordIcon}
          onChangeText={nextValue => setPasswordValue(nextValue)}
          label={evaProps => <Text {...evaProps}>Password</Text>}
        />
        <View style={styles.btnRow}>
          <Button style={styles.btn} onPress={navigateSignUp}>
            Sign Up
          </Button>
          <Button
            style={styles.btn}
            onPress={() => login(usernameValue, passwordValue)}>
            Login
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
