# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts`
  - posts index
  - accepts `tag_name` query param to list notes by tag
  - accepts pagination params (if I get there)
  - calculates total UpVotes/DownVotes and Comments (NEED HELP WITH THIS!!!)

- `POST /api/posts`
- `GET /api/post/:id`
  - calculates total UpVotes/DownVotes and Comments (NEED HELP WITH THIS!!!)
  - new comment form
  - shows nested comments index

### Comments

- `POST /api/post/:id/comments`
  - index of all comments for a post
  - accepts pagination params (if I get there)
- `GET /api/notebooks/:id`

### Tags

- Hmmmm. not really sure how to handle this from the api
