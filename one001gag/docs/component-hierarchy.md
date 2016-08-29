## Component Hierarchy

**HomeContainer**
 - Login/Sign-Up
 - Guest Login


**FeedContainer**
 - Header
  * Index

**PostContainer**
  + Post detail
  + Comments


**NewPostContainer**
 - NewPost

## Routes

|Path   | Component   |
|-------|-------------|
| `/sign-up` | `homeContainer` |
| `/sign-in` | `homeContainer` |
| `/home/index` | `feedContainer` |
| `/home/post/:postId/` | `detailContainer` |
| `/home/post/:postId/newComment` | `newCommentContainer` |
| `/home/post/:postId/comments` | `commentsContainer` |
