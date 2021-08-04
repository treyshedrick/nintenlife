import React from 'react';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../redux/actions/user';

const Profile = ({navigation, user, actions}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const signOut = () => {
    actions.signOut().then(() => navigateLogin());
  };

  console.log(user);

  return (
    <Layout style={{flex: 1, paddingTop: 30}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => signOut()}>Sign Out</Button>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const ActionCreators = Object.assign({}, UserActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
