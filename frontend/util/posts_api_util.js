export const requestPosts = (success) => {
  $.ajax({
    type: "GET",
    url: "api/posts",
    success
  });
};

export const requestPost = (postId, success) => {
  $.ajax({
    type: "GET",
    url: `api/posts/${postId}`,
    success
  });
};

export const createPost = (post, success) => {
  $.ajax({
    type: "POST",
    url: `api/posts`,
    success
  });
};
