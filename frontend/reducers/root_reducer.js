import { SessionReducer } from './session_reducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
  session: SessionReducer
});
