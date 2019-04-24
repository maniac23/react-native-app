import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
const myContext = React.createContext();

const RNRedux = () => (
  <Provider store={store} context={myContext}>
    <App />
  </Provider>
);
AppRegistry.registerComponent('my-app', () => RNRedux);
