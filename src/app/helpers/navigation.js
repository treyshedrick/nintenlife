import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../redux/actions/user';

import {HomeScreen} from '../screens/home';
import {PostsScreen} from '../screens/posts';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Profile from '../screens/profile';
import SplashScreen from '../screens/splash';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = ({user, actions}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    actions.currentAuthenticatedUser().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Navigator headerMode="none">
      {user.userState === 'USER_LOGIN_SUCCESS' ||
      user.userState === 'USER_SIGNED_IN' ||
      user.userState === 'USER_SIGNUP_SUCCESS' ? (
        <>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Posts" component={PostsScreen} />
          <Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Screen name="Login" component={Login} />
          <Screen name="Signup" component={Signup} />
        </>
      )}
    </Navigator>
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
