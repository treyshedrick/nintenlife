import React, {useEffect, useState} from 'react';
import {Divider, Layout, TopNavigation, Button} from '@ui-kitten/components';
import {StyleSheet, FlatList} from 'react-native';
import {EditIcon} from '../shared/icons';
import pageStyles from './styles/page';
import PostCard from '../shared/PostCard';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../../services/graphql/queries';

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
      paddingTop: 18,
      paddingBottom: 18,
      position: 'absolute',
    },
  });

  const [allposts, getAllPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigateNewPost = () => {
    navigation.navigate('NewPost');
  };

  useEffect(async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    getAllPosts(posts.data.listPosts.items);
    setIsLoaded(true);
  }, []);

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation title="Posts" alignment="center" />
      <Divider />
      <Layout style={styles.contentContainer}>
        {isLoaded && (
          <FlatList
            data={allposts}
            contentContainerStyle={styles.scrollContainer}
            keyExtractor={item => item.id}
            vertical
            renderItem={({item}) => (
              <PostCard
                post={{
                  title: item.name,
                  summary: item.description,
                }}
              />
            )}
            initialNumToRender={2}
            windowSize={2}
          />
        )}
        <Button
          style={styles.button}
          accessoryLeft={EditIcon}
          onPress={navigateNewPost}
        />
      </Layout>
    </Layout>
  );
};
