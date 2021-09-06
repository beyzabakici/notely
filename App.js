import React from 'react';
import Router from './src/Router';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
