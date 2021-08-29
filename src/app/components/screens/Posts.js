import React from 'react';
import {Divider, Layout, TopNavigation, Button} from '@ui-kitten/components';
import {StyleSheet, ScrollView} from 'react-native';
import {EditIcon} from '../shared/icons';
import pageStyles from './styles/page';
import PostCard from '../shared/PostCard';

export const PostsScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    scrollContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    },
    button: {
      bottom: 25,
      right: 25,
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <PostCard
            post={{
              title: 'Zelda: Breath of the Wild Review',
              summary:
                'This is another test to see if it goes all the way to the width asldfh asd fowier als dfalsdjf asld fa;ls dfa sdf asd fa sdf asd faw',
            }}
          />
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
