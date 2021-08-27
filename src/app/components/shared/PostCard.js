import React from 'react';
import {Text, Card, useTheme} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

const Header = ({title}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme['color-info-transparent-400'],
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const PostCard = ({post}) => {
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      maxHeight: 250,
      width: '100%',
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
  });

  return (
    <Card style={styles.card} header={<Header title={post.title} />}>
      <Text>{post.summary}</Text>
    </Card>
  );
};

export default PostCard;
