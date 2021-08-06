import React from 'react';
import {Text, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, paddingTop: 30}}>
      <TopNavigation title="NintenLife" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Home</Text>
      </Layout>
    </Layout>
  );
};
