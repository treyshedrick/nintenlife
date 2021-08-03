import React from 'react';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import * as UA from '../../auth/userLogin';

const Profile = ({navigation}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const signOut = () => {
    UA.signOut().then(() => navigateLogin());
  };

  return (
    <Layout style={{flex: 1, paddingTop: 30}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => signOut()}>Sign Out</Button>
      </Layout>
    </Layout>
  );
};

export default Profile;
