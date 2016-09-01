import * as Actions from '../actions/session_actions';
import * as API from './../util/session_api_util';
import {hashHistory } from 'react-router';

export const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let successCallback = data => dispatch(Actions.receiveCurrentUser(data));
  let errorCallback = xhr => {
    let errors = xhr.responseJSON;
    dispatch(Actions.receiveErrors(errors));
  };
  switch (action.type) {
    case "LOGIN":
      API.logIn({user: action.user},successCallback, errorCallback);
      return next(action);
    case "SIGNUP":
      API.signUp({user: action.user}, successCallback, errorCallback);
      return next(action);
    case "LOGOUT":
      API.logOut(() => {
        next(action);
        hashHistory.push("/login");
      });
      break;
    default:
      return next(action);
    }
};
