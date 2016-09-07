
export const requestPosts = (success) => {
  $.ajax({
    type: "GET",
    url: "api/posts",
    success
  });
};

export const requestPost = (postId, success,error) => {
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
    data: {post: post},
    success
  });
};

export const createComment = (comment, success) => {
  $.ajax({
    type: "POST",
    url: `api/comments`,
    data: {comment: comment},
    success
  });
};

export const createVote = (vote, success) => {
  $.ajax({
    type: "POST",
    url: `api/votes`,
    data: {vote: vote},
    success
  });
};

export const destroyVote = (vote, success) => {
  $.ajax({
    type: "DELETE",
    url: `api/votes/${vote.id}`,
    data: {vote: vote},
    success
  });
};

export const updateVote = (vote, success) => {
  $.ajax({
    type: "PATCH",
    url: `api/votes/${vote.id}`,
    data: {vote: vote},
    success
  });
};
