import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import { Provider } from 'react-redux';
import * as Actions from './actions/session_actions';
import * as API from './util/session_api_util';
import {Root} from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  
  window.signUp = Actions.signUp;
  window.logIn = Actions.logIn;
  window.logOut = Actions.logOut;
  let pls;
  if (window.currentUser) {
    pls = {session: {currentUser: window.currentUser}};
  }
  const store = window.store = configureStore(pls);
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
