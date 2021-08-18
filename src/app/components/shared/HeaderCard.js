import React from 'react';
import {Text, Card} from '@ui-kitten/components';
import {ImageBackground, StyleSheet} from 'react-native';

const Header = ({image}) => {
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
    },
  });

  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{uri: image}}
    />
  );
};

const HeaderCard = ({article, openLink}) => {
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      width: 250,
      margin: 15,
      justifyContent: 'center',
    },
  });

  return (
    <Card
      style={styles.card}
      header={<Header image={article.media} />}
      onPress={() => openLink(article.link)}>
      <Text numberOfLines={2}>{article.title}</Text>
    </Card>
  );
};

export default HeaderCard;
