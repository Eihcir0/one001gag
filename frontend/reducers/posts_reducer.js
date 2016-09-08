import { merge } from 'lodash';

export const PostsReducer =
  (state = {posts: {}, comment: {}}, action) => {
   switch(action.type){
     case "RECEIVE_POSTS":
      return merge ({}, {posts: action.posts});
     case "RECEIVE_POST":
      let oldState = merge({},state);
      let postId = Object.keys(action.post)[0];
      delete oldState.posts[postId];
      let a = merge (oldState, {posts: action.post});
      return a;
   default:
     return state;
   }
 };
