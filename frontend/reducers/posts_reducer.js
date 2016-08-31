import { merge } from 'lodash';

export const PostsReducer =
  (state = {posts: {}}, action) => {
   switch(action.type){
     case "RECEIVE_POSTS":
      return merge ({}, {posts: action.posts});

     default:
       return state;
   }
 };
