// import {hashHistory } from 'react-router';


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
