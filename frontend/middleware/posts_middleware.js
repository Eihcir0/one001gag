import * as Actions from '../actions/posts_actions';
import * as API from './../util/posts_api_util';
import {hashHistory } from 'react-router';


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

    case "CREATE_POST":
      successCallback = data => hashHistory.push(`/posts/${Object.keys(data)[0]}`);
      API.createPost(action.post, successCallback);
      return next(action);

    case "CREATE_COMMENT":
      successCallback = data => dispatch(Actions.receivePost(data));
      API.createComment(action.comment, successCallback);
      return next(action);

    case "DESTROY_VOTE":
      successCallback = data => dispatch(Actions.receivePost(data));
      API.destroyVote(action.vote, successCallback);
      return next(action);

    case "UPDATE_VOTE":
      successCallback = data => dispatch(Actions.receivePost(data));
      API.updateVote(action.vote, successCallback);
      return next(action);

    case "CREATE_VOTE":
      successCallback = (data) => dispatch(Actions.receivePost(data));
      API.createVote(action.vote, successCallback);
      return next(action);

    default:
      return next(action);
    }
};
