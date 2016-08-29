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
  - calculates total UpVotes/DownVotes and Comments (NEED HELP WITH THIS!!!)

- `POST /api/posts`
- `GET /api/post/:id`
  - calculates total UpVotes/DownVotes and Comments (NEED HELP WITH THIS!!!)
  - new comment form
  - shows nested comments index

### Comments

- `POST /api/post/:id/comments`
- `GET /api/post/:id/comments`
  - index of all comments for a post
