import React from 'react';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import pageStyles from './styles/page';
import {BackIcon} from '../shared/icons';

const NewPost = ({navigation}) => {
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation
        accessoryLeft={BackAction}
        title="New Post"
        alignment="center"
      />
      <Divider />
      <Layout style={styles.contentContainer}>
        <Text category="h4">New Posts</Text>
      </Layout>
    </Layout>
  );
};

export default NewPost;
