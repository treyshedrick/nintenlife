import React, {useEffect, useState} from 'react';
import {
  Text,
  Divider,
  Layout,
  TopNavigation,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {ImageBackground, StyleSheet, ScrollView} from 'react-native';
import pageStyles from './styles/page';
import {getNintendoNews} from '../../../services/newsApi';
import HeaderCard from '../shared/HeaderCard';

export const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    mainArticlesContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    imgContainer: {
      height: '50%',
    },
    articlesScroll: {
      marginTop: 20,
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'center',
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
    mainBtn: {
      marginVertical: 20,
      marginHorizontal: 50,
    },
  });

  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getNintendoNews()
      .then(response => {
        const articles = response.articles.filter(
          (article, index, arr) =>
            index === arr.findIndex(a => a.title === article.title),
        );

        setNewsArticles(articles);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout style={pageStyles.fullPage}>
      <TopNavigation title="NintenLife" alignment="center" />
      <Divider />
      <Layout style={styles.mainArticlesContainer}>
        <Layout style={styles.imgContainer}>
          {isLoaded && (
            <ImageBackground
              source={{uri: newsArticles[0].media}}
              resizeMode="cover"
              style={styles.mainLayout}>
              <Layout style={styles.titleSideHeader}>
                <Text
                  style={styles.sideHeaderText}
                  category="h6"
                  numberOfLines={2}>
                  {newsArticles[0].title}
                </Text>
              </Layout>
              <Button style={styles.mainBtn}>Read</Button>
            </ImageBackground>
          )}
        </Layout>
        <ScrollView contentContainerStyle={styles.articlesScroll} horizontal>
          {isLoaded && (
            <>
              {newsArticles.slice(1).map((article, i) => (
                <HeaderCard article={article} key={article._id} />
              ))}
            </>
          )}
        </ScrollView>
      </Layout>
    </Layout>
  );
};
