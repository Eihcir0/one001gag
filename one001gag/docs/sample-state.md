```json
{
  currentUser: {
    id: 1,
    username: "Richie Humphrey"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["can't be blank"]}
  },
  posts: {
    1: {
      title: "Computer smash",
      image_id: 1,
      url: 111.111,
      nsfw: false,
      user_id: 1,
      tags: {
        1: {
          id: 1
          name: "computer smash"
        }
      }
      comments: {
        content: "this post sucks",
        user_id: 2
      }
    }
  }
}
```
