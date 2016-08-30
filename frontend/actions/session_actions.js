export const logIn = (user) => ({
  type: "LOGIN",
  user
});
export const logOut = () => ({
  type: "LOGOUT",
});
export const signUp = (user) => ({
  type: "SIGNUP",
  user
});

export const receiveCurrentUser = (user) => ({
  type: "RECEIVE_CURRENT_USER",
  user
});

export const receiveErrors = (errors) => ({
  type: "RECEIVE_ERRORS",
  errors
});
