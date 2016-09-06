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

      successCallback = data => window.scrollTo(0,document.body.scrollHeight);

      API.createComment(action.comment, successCallback);
      return next(action);

    default:
      return next(action);
    }
};


//
