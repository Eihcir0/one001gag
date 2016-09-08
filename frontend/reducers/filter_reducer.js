import { merge } from 'lodash';

export const FilterReducer =
  (state = {filter: "HOT"}, action) => {
   switch(action.type){
     case "RECEIVE_FILTER":
       return {filter: action.filter};
     default:
       return state;
   }
 };
