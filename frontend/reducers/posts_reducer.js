import { merge } from 'lodash';

export const PostsReducer =
  (state = {}, action) => {
   switch(action.type){
     case "RECEIVE_POSTS":
      return merge ({},action.posts);

     default:
       return state;
   }
 };
