import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '~redux/actions/user';
import {StyleSheet} from 'react-native';
import pageStyles from '~shared/styles/page';

const Profile = ({user, actions}) => {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      padding: 20,
    },
    userInfo: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    header: {
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 30,
    },
    questions: {
      fontSize: 12,
      marginBottom: 15,
    },
  });

  const signOut = () => {
    actions.signOut();
  };

  return (
    <Layout style={pageStyles.fullPage}>
      <Layout style={styles.layout}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.userInfo}>Username: {user.username}</Text>
        <Text style={styles.userInfo}>Email: {user.email}</Text>
        <Text style={styles.questions}>
          If you have any questions regarding your account, please contact
          support at (+1)-111-111-1111
        </Text>
        <Button appearance="outline" onPress={() => signOut()}>
          Sign Out
        </Button>
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
