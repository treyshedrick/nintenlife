import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './helpers/theme.json';

import Amplify from 'aws-amplify';
import config from '../aws-exports';
import AppNavigator from './helpers/navigation';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <Layout style={{height: '100%'}}>
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
