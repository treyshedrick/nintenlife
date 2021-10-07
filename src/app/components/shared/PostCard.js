import React from 'react';
import {Text, Card, useTheme} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {format} from 'date-fns';

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

const Footer = ({name, date}) => {
  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    date: {
      fontSize: 13,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.date}>{format(new Date(date), 'PPP')}</Text>
      <Text style={styles.title} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

const PostCard = ({post}) => {
  const styles = StyleSheet.create({
    card: {
      maxHeight: 250,
      minWidth: '100%',
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
  });

  return (
    <Card
      style={styles.card}
      header={<Header title={post.name} />}
      footer={<Footer name={post.user} date={post.updatedAt} />}>
      <Text>{post.description}</Text>
    </Card>
  );
};

export default PostCard;
