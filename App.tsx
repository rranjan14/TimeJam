import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import AppNavigator from './src/navigation';
import {store} from './src/store';

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle="default" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}
