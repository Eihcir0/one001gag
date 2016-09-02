import * as Actions from '../actions/posts_actions';
import * as API from './../util/posts_api_util';

export const PostsMiddleware = ({getState, dispatch}) => next => action => {
  let successCallback;
  switch (action.type) {

    case "REQUEST_POSTS":
      successCallback = data => dispatch(Actions.receivePosts(data));
      API.requestPosts(successCallback);
      return next(action);

    case "REQUEST_POST":
      successCallback = data => dispatch(Actions.receivePost(data));
      API.requestPost(action.postId, successCallback);
      return next(action);

    default:
      return next(action);
    }
};
