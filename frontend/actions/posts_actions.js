export const requestPosts = () => ({
  type: "REQUEST_POSTS",
});
export const receivePosts = (data) => ({
  type: "RECEIVE_POSTS",
  posts: data
});
export const requestPost = (postId) => ({
  type: "REQUEST_POST",
  postId
});
export const receivePost = (data) => ({
  type: "RECEIVE_POST",
  post: data
});

export const createPost = (data) => ({
  type: "CREATE_POST",
  post: data
});
