import React, {useState} from 'react';
import {Layout, Input, Text, Button} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from 'react-native';

import styles from '~shared/styles/form';
import {EyeIcon} from '~shared/icons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '~redux/actions/user';

const Signup = ({navigation, actions}) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailAddressValue, seEmailAddressValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigateBack = () => {
    navigation.goBack();
  };

  const signup = (username, password, email) => {
    actions.signUp(username, password, email);
  };

  const ShowPasswordIcon = props => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <EyeIcon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );

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
        secureTextEntry={secureTextEntry}
        accessoryRight={ShowPasswordIcon}
        label={evaProps => <Text {...evaProps}>Set a password</Text>}
      />
      <Button
        style={styles.btn}
        onPress={() => signup(usernameValue, passwordValue, emailAddressValue)}>
        Sign Up
      </Button>
      <Button appearance="ghost" onPress={navigateBack}>
        Back to Login
      </Button>
    </Layout>
  );
};

const ActionCreators = Object.assign({}, UserActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(Signup);
