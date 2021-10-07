import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '~redux/actions/user';
import {StyleSheet} from 'react-native';
import pageStyles from '~shared/styles/page';

const Profile = ({user, actions}) => {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const signOut = () => {
    actions.signOut();
  };

  console.log(user);

  return (
    <Layout style={pageStyles.fullPage}>
      <Layout style={styles.layout}>
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
