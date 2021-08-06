import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  return (
    <Layout style={{height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation title="NintenLife" alignment="center" />
        <Divider />
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category="h1">Home</Text>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};
