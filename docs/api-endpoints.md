# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`


### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
  - posts index
  - calculates total UpVotes/DownVotes and comments

- `POST /api/posts`
- `GET /api/post/:id`
  - calculates total UpVotes/DownVotes and total comments
  - new comment form
  - shows nested comments index

### Comments

- `POST /api/post/:id/comments`
- `GET /api/post/:id/comments`
  - index of all comments for a post
