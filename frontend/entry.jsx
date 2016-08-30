import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import { Provider } from 'react-redux';
import * as Actions from './actions/session_actions';
import {Root} from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
