import { createStore } from 'redux';
import {RootReducer} from './../reducers/root_reducer';
import RootMiddleWare from './../middleware/root_middleware';

export const configureStore = (preloadedState = {}) => (
    createStore(
      RootReducer,
      preloadedState,
      RootMiddleWare
    )
  );
