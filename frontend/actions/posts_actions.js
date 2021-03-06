export const createPost = (data) => ({
  type: "CREATE_POST",
  post: data
});

export const createComment = (data) => ({
  type: "CREATE_COMMENT",
  comment: data
});

export const createVote = (data) => ({
  type: "CREATE_VOTE",
  vote: data
});

export const destroyVote = (data) => ({
  type: "DESTROY_VOTE",
  vote: data
});

export const updateVote = (data) => ({
  type: "UPDATE_VOTE",
  vote: data
});

export const requestPosts = () => ({
  type: "REQUEST_POSTS",
});


export const requestPost = (postId) => ({
  type: "REQUEST_POST",
  postId
});

export const receivePosts = (data) => ({
  type: "RECEIVE_POSTS",
  posts: data
});
export const receivePost = (data) => ({
  type: "RECEIVE_POST",
  post: data
});
