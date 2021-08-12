import React, {useEffect, useState} from 'react';
import {
  Text,
  Divider,
  Layout,
  TopNavigation,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {ImageBackground} from 'react-native';
import {getNintendoNews} from '../../../services/newsApi';

export const HomeScreen = ({navigation}) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    getNintendoNews()
      .then(response => {
        setNewsArticles(response.articles);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout style={{height: '100%'}}>
      <TopNavigation title="NintenLife" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, flexDirection: 'column'}}>
        <Layout style={{height: '50%'}}>
          {isLoaded && (
            <ImageBackground
              source={{uri: newsArticles[3].media}}
              resizeMode="cover"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Layout
                style={{
                  backgroundColor: theme['background-basic-color-1'],
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  width: '75%',
                  marginTop: 20,
                  opacity: 0.9,
                }}>
                <Text
                  style={{color: theme['text-basic-color'], margin: 10}}
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
