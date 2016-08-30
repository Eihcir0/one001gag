export const signUp = (user, success, errors) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    success,
    errors,
    data: user
  });
};

export const logIn = (user, success, errors) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    success,
    errors,
    data: user
  });
};

export const logOut = (success, errors) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    success,
    errors,
  });
};
