import React from 'react';
import {SafeAreaView} from 'react-native';
import {Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';

export const PostsScreen = ({navigation}) => {
  return (
    <Layout style={{height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation title="Posts" alignment="center" />
        <Divider />
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category="h4">Posts</Text>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};
