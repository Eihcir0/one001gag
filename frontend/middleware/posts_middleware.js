import * as Actions from '../actions/posts_actions';
import * as API from './../util/posts_api_util';

export const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let successCallback = data => dispatch(Actions.receivePosts(data));
  switch (action.type) {

    case "REQUEST_POSTS":
      API.requestPosts(successCallback);
      return next(action);

    case "REQUEST_POST":
      API.requestPosts(action.postId, successCallback);
      return next(action);

    default:
      return next(action);
    }
};
