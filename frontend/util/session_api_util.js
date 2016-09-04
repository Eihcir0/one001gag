export const signUp = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    success,
    error,
    data: user
  });
};

export const logIn = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    success,
    error,
    data: user
  });
};

export const logOut = (success, error) => {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success,
    error
  });
};
