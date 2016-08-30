import * as Actions from '../actions/session_actions';
import * as API from './../util/session_api_util';

export const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let errors;
  switch (action.type) {
    case "LOGIN":
      success = data => dispatch(Actions.receiveCurrentUser(data));
      errors = response => Actions.receiveErrors(response);
      API.logIn(success);
      break;
    case "SIGNUP":
      success = data => dispatch(Actions.receiveCurrentUser(data));
      errors = response => Actions.receiveErrors(response);
      API.signUp(success);
      break;
    case "LOGOUT":
      success = data => next(action);
      errors = response => Actions.receiveErrors(response);
      API.logOut(success);
      break;
    default:
      return next(action);
    }
};
