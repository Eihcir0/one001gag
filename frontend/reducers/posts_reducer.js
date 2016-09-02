import { merge } from 'lodash';

export const PostsReducer =
  (state = {posts: {}}, action) => {
   switch(action.type){
     case "RECEIVE_POSTS":
      return merge ({}, {posts: action.posts});
     case "RECEIVE_POST":
      let oldState = merge({},state);
      return merge (oldState, {posts: action.post});

   default:
     return state;
   }
 };
