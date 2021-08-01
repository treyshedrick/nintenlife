import React from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';
import styles from './styles/form';

const Login = ({navigation}) => {
  const [usernameValue, setUsernameValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const navigateSignUp = () => {
    navigation.navigate('Signup');
  };

  const login = (username, password) => {
    UA.signIn(username, password);
    // will return user info and dispatch to redux
  };

  return (
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
  );
};

export default Login;
