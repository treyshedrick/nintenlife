import React, {useEffect, useState} from 'react';
import {
  Text,
  Divider,
  Layout,
  TopNavigation,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {ImageBackground, StyleSheet} from 'react-native';
import pageStyles from './styles/page';
import {getNintendoNews} from '../../../services/newsApi';

export const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    mainArticleContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    imgContainer: {
      height: '50%',
    },
    mainLayout: {
      flex: 1,
      justifyContent: 'space-between',
    },
    titleSideHeader: {
      backgroundColor: theme['background-basic-color-1'],
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      width: '75%',
      marginTop: 20,
      opacity: 0.9,
    },
    sideHeaderText: {
      color: theme['text-basic-color'],
      margin: 10,
    },
  });

  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getNintendoNews()
      .then(response => {
        setNewsArticles(response.articles);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation title="NintenLife" alignment="center" />
      <Divider />
      <Layout style={styles.mainArticleContainer}>
        <Layout style={styles.imgContainer}>
          {isLoaded && (
            <ImageBackground
              source={{uri: newsArticles[3].media}}
              resizeMode="cover"
              style={styles.mainLayout}>
              <Layout style={styles.titleSideHeader}>
                <Text
                  style={styles.sideHeaderText}
                  category="h6"
                  numberOfLines={2}>
                  {newsArticles[3].title}
                </Text>
              </Layout>
              <Button>Read</Button>
            </ImageBackground>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};
