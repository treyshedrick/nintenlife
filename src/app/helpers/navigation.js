import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home';
import {PostsScreen} from '../screens/posts';
import Login from '../screens/login';
import Signup from '../screens/signup';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={Login} />
    <Screen name="Signup" component={Signup} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Posts" component={PostsScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
