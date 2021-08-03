import React from 'react';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Posts');
  };

  const navigateProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <Layout style={{flex: 1, paddingTop: 30}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={navigateProfile}>Open Profile</Button>
      </Layout>
    </Layout>
  );
};
