export const requestPosts = () => ({
  type: "REQUEST_POSTS",
});
export const receivePosts = (data) => ({
  type: "RECEIVE_POSTS",
  posts: data
});
