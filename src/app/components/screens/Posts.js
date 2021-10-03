import React, {useEffect, useState, useCallback} from 'react';
import {Divider, Layout, TopNavigation, Button} from '@ui-kitten/components';
import {StyleSheet, FlatList, RefreshControl} from 'react-native';
import {EditIcon} from '~shared/icons';
import pageStyles from '~shared/styles/page';
import PostCard from '~shared/PostCard';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '~graphql/queries';

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
  const [refreshing, setRefreshing] = React.useState(false);

  const navigateNewPost = () => {
    navigation.navigate('NewPost');
  };

  const onRefresh = useCallback(async () => {
    const refreshPosts = await API.graphql(graphqlOperation(listPosts));
    getAllPosts(refreshPosts.data.listPosts.items);

    setRefreshing(false);
  }, []);

  useEffect(async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    getAllPosts(posts.data.listPosts.items);

    setIsLoaded(true);
  }, []);

  return (
    <Layout style={pageStyles.fullPage}>
      <Layout style={styles.contentContainer}>
        {isLoaded && (
          <FlatList
            data={allposts}
            contentContainerStyle={styles.scrollContainer}
            keyExtractor={item => item.id}
            vertical
            renderItem={({item}) => <PostCard post={item} />}
            initialNumToRender={2}
            windowSize={2}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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
