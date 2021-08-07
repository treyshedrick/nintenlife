import React from 'react';
import {Icon} from '@ui-kitten/components';

export const HomeIcon = props => <Icon {...props} name="home" />;
export const ProfileIcon = props => <Icon {...props} name="person" />;
export const PostIcon = props => <Icon {...props} name="book" />;
export const EyeIcon = props => <Icon {...props} />; //pass name through props to change on the fly
