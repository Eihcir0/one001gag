# one001gag

[one001gag live][heroku]

[heroku]: http://www.9gag.com

What is one001gag?
 - full-stack, `single-page` web application
 - inspired by 9gag
 - (but containing only tech/computer humor - `1001 is binary for 9!`)
 - `Ruby on Rails` backend
 - `PostgreSQL` database
 - `React.js with Redux` on the frontend.  


## Minimum Viable Product

`one001gag` is a web application inspired by 9gag built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, entertaining seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Feed displays posts, comment count, vote count
- [ ] Post detail displays
  - [ ] nested comments
  - [ ] new comment form
  - [ ] reply to comments
- [ ] UpVotes/DownVotes on comments and posts
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes.md
[components]: docs/components.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPage` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Redirect to blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Posts Model, API, and components (2 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] `Post` model
- [ ] Seed database with a small amount of test data
- [ ] CR API for posts (`PostsController`)
- [ ] JBuilder views for posts
- Post components and respective Redux loops
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostCreateForm`
- [ ] Style posts components
- [ ] Seed posts

### Phase 3: Comments (2 days)

**Objective:** Comments belong to Posts that can be created, or read through the API.

- [ ] `Comment` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for comments (`CommentsController`)
- [ ] Update JBuilder view for comment posts to include comments
- [ ] Style comment components
- [ ] Seed comments

### Phase 4: Votes (2 days)

**Objective:** Votes belong to Posts that can be created, or read through the API.

- [ ] `Vote` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for votes (`VotesController`)
- [ ] Update JBuilder view for comment posts to include vote totals and currentUserVote



### Bonus Features (TBD)
