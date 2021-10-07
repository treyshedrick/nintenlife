import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView} from 'react-native';
import {Appearance} from 'react-native';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import {Provider} from 'react-redux';

import configureStore from '~redux/configureStore';
import {default as theme} from '~helpers/theme.json';
import AppNavigator from '~helpers/navigation';
import pageStyles from '~shared/styles/page';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const store = configureStore();

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(() => {
    if (colorScheme !== Appearance.getColorScheme()) {
      setColorScheme(Appearance.getColorScheme());
    }
  });

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva[colorScheme], ...theme}}>
        <Layout style={pageStyles.fullPage}>
          <SafeAreaView style={pageStyles.flex}>
            <AppNavigator />
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
