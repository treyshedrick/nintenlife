import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';

const Login = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HOME</Text>
      <Button>Login</Button>
    </Layout>
  );
};

export default Login;
