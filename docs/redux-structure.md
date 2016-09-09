# Redux Structure


The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SessionForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Session` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Session` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.


## Post Cycles

### Posts API Request Actions

* `fetchPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receivePosts` is set as the success callback.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receivePost` is set as the success callback.

* `createComment`
  0. invoked from Comment post button `onClick`
  0. `POST /api/comments` is called.
  0. `receivePost` is set as the success callback.

* `destroyVote`
  0. invoked from vote buttons `onClick`
  0. `POST /api/votes` is called.
  0. `receivePost` is set as the success callback.

* `updateVote`
  0. invoked from vote buttons `onClick`
  0. `POST /api/votes` is called.
  0. `receivePost` is set as the success callback.



### Posts API Response Actions

* `receivePosts`
  0. invoked from an API callback
  0. the `PostReducer` updates `posts` in the application's state.

* `receivePost`
  0. invoked from an API callback
  0. the `PostReducer` updates `posts[id]` in the application's state.
