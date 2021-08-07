import React from 'react';
import {Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';

export const PostsScreen = ({navigation}) => {
  return (
    <Layout style={{height: '100%'}}>
      <TopNavigation title="Posts" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h4">Posts</Text>
      </Layout>
    </Layout>
  );
};
