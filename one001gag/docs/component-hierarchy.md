## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Login/Sign-Up
 - Guest Login
 - Cool background / gif

**FeedContainer**
 - Header
  * Index

**PostContainer**
 - Header
  + Post detail
  + Comments


**NewPostContainer**
 - NewPost

## Routes

|Path   | Component   |
|-------|-------------|
| `/sign-up` | `authFormContainer` |
| `/sign-in` | `authFormContainer` |
| `/home` | `homeContainer` |
| `/home/index` | `feedContainer` |
| `/home/post/:postId/` | `detailContainer` |
| `/home/post/:postId/newComment` | `newCommentContainer` |
| `/home/post/:postId/comments` | `commentsContainer` |
