import React, {useState} from 'react';
import {View} from 'react-native';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';
import styles from './styles/form';

const Signup = ({navigation}) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailAddressValue, seEmailAddressValue] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const signup = (username, password, email) => {
    UA.signUp(username, password, email);
  };

  return (
    <Layout style={styles.layout}>
      <Text category="h1" style={styles.center}>
        Sign Up!
      </Text>
      <Input
        style={styles.input}
        value={emailAddressValue}
        onChangeText={nextValue => seEmailAddressValue(nextValue)}
        label={evaProps => <Text {...evaProps}>Email Address</Text>}
      />
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
        label={evaProps => <Text {...evaProps}>Set a password</Text>}
      />
      <View style={styles.btnRow}>
        <Button style={styles.btn} onPress={navigateBack}>
          Back to Login
        </Button>
        <Button
          style={styles.btn}
          onPress={() =>
            signup(usernameValue, passwordValue, emailAddressValue)
          }>
          Sign Up
        </Button>
      </View>
    </Layout>
  );
};

export default Signup;
