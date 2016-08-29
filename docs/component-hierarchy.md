## Component Hierarchy

**HomeContainer**
 - Login/Sign-Up
 - Guest Login


**AppContainer**
 - Header
  - Upload form (modal)
 - depending on route:
  - Index
  - Show


**IndexContainer**
  + Index item



**NewPostContainer**
 - NewPost

## Routes

|Path   | Component   |
|-------|-------------|
| `/sign-up` | `homeContainer` |
| `/sign-in` | `homeContainer` |
| `/` | `indexContainer` |
| `/:postId/` | `detailContainer` |
