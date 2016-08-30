import { merge } from 'lodash';

export const SessionReducer =
  (state = {currentUser: null, errors: [] }, action) => {
   switch(action.type){
     case "RECEIVE_CURRENT_USER":
       return {currentUser: action.user, errors: []};

     case "RECEIVE_ERRORS":
      let newstate = merge({},state);
      newstate.errors = action.errors;
      return newstate;

     case "LOGOUT":
       return {currentUser: null, errors: [] };

     default:
       return state;
   }
 };
