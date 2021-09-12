import React, {useEffect, useState} from 'react';
import {
  Divider,
  Layout,
  Button,
  TopNavigation,
  Text,
  TopNavigationAction,
  Input,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import pageStyles from './styles/page';
import {BackIcon} from '../shared/icons';

import {connect} from 'react-redux';
import {API, graphqlOperation} from 'aws-amplify';
import {createPost} from '../../../services/graphql/mutations';

const NewPost = ({user, navigation}) => {
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 0.6,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 10,
    },
    fullBtn: {
      width: '80%',
    },
    textArea: {
      minHeight: 128,
    },
  });

  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const sendPost = async (titleName, postDescription) => {
    try {
      await API.graphql(
        graphqlOperation(createPost, {
          input: {
            name: titleName,
            description: postDescription,
            user_id: user.id,
            user: user.username,
          },
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation
        accessoryLeft={BackAction}
        title="New Post"
        alignment="center"
      />
      <Divider />
      <Layout style={styles.contentContainer}>
        <Text>
          Write a review, blog post, or any thoughts you have about anything
          Nintendo!
        </Text>
        <Input
          placeholder="Title"
          value={title}
          onChangeText={nextValue => setTitle(nextValue)}
        />
        <Input
          multiline={true}
          textStyle={styles.textArea}
          placeholder="Explain more!"
          value={post}
          onChangeText={nextValue => setPost(nextValue)}
        />
        <Button
          style={styles.fullBtn}
          onPress={() => {
            navigation.goBack();
            sendPost(title, post);
          }}>
          Post!
        </Button>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(NewPost);
