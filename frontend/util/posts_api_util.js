export const requestPosts = (success) => {
  $.ajax({
    type: "GET",
    url: "api/posts",
    success
  });
};
