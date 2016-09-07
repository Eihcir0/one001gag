import { SessionReducer } from './session_reducer';
import { FilterReducer } from './filter_reducer';
import { PostsReducer } from './posts_reducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  filter: FilterReducer
});
