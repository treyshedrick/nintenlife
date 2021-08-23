import React from 'react';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Button,
} from '@ui-kitten/components';
import {StyleSheet, ScrollView} from 'react-native';
import {EditIcon} from '../shared/icons';
import pageStyles from './styles/page';

export const PostsScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    button: {
      bottom: 30,
      right: 30,
      borderRadius: 50,
      paddingTop: 22,
      paddingBottom: 22,
      position: 'absolute',
    },
  });

  const navigateNewPost = () => {
    navigation.navigate('NewPost');
  };

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation title="Posts" alignment="center" />
      <Divider />
      <Layout style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text category="h4">Posts</Text>
        </ScrollView>
        <Button
          style={styles.button}
          size="giant"
          accessoryLeft={EditIcon}
          onPress={navigateNewPost}
        />
      </Layout>
    </Layout>
  );
};
