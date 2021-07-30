import React from 'react';
import * as eva from '@eva-design/eva';
import { View } from 'react-native';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './helpers/theme.json';

import Amplify from 'aws-amplify';
import config from '../aws-exports';
import Login from './screens/login';
import {AppNavigator} from './helpers/navigation';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <Layout style={{height: '100%'}}>
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </>
  );
};

export default App;
