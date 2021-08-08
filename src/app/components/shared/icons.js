import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Spinner} from '@ui-kitten/components';

export const HomeIcon = props => <Icon {...props} name="home" />;
export const ProfileIcon = props => <Icon {...props} name="person" />;
export const PostIcon = props => <Icon {...props} name="book" />;
export const EyeIcon = props => <Icon {...props} />; //pass name through props to change on the fly

export const LoadingIndicator = props => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="tiny" />
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
