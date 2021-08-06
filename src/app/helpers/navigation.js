import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../redux/actions/user';

import {HomeScreen} from '../screens/home';
import {PostsScreen} from '../screens/posts';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Profile from '../screens/profile';
import SplashScreen from '../screens/splash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Posts" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const HomeNavigator = ({user, actions}) => {
  const [isLoading, setIsLoading] = useState(true);

  const isSignedIn =
    user.userState === 'USER_LOGIN_SUCCESS' ||
    user.userState === 'USER_SIGNED_IN' ||
    user.userState === 'USER_SIGNUP_SUCCESS';

  useEffect(() => {
    actions.currentAuthenticatedUser().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <>
      {isSignedIn ? (
        <Tab.Navigator
          headerMode="none"
          tabBar={props => <BottomTabBar {...props} />}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Posts" component={PostsScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </>
  );
};

const AppNavigator = ({user, actions}) => {
  return (
    <NavigationContainer>
      <HomeNavigator user={user} actions={actions} />
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const ActionCreators = Object.assign({}, UserActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
