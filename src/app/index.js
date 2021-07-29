import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import Amplify from 'aws-amplify';
import config from '../aws-exports';
import Login from './components/login';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Login />
    </ApplicationProvider>
  );
};

export default App;
