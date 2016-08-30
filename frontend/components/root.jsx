import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './app_router';
// <h1> root here!</h1>

export const Root = ({ store }) => (
  <Provider store={store}>
      <AppRouter/>
  </Provider>
);
