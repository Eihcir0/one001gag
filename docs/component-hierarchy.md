## Component Hierarchy



**App Container**
 - Header
  - Upload form (modal)

**Home Container**
- Login/Sign-Up
- Guest Login

 - depending on route:
  - `Index Container` (see below)

  OR
  - `Index Item Detail Container`



**Index Container**
  - Index
  - Index Item
  - Index Item Info


**Index Item Detail Container**
- Index Item Detail
- Index Item Info
- New Comment Form
- Comments Index
  - Comments Index Item
  - Comments Index Item Info



**New Post Container**
 - New Post

## Routes

|Path   | Component   |
|-------|-------------|
| `/sign-up` | `homeContainer` |
| `/sign-in` | `homeContainer` |
| `/` | `indexContainer` |
| `/:postId/` | `detailContainer` |
| `/:postId/comments` | `commentsIndex` |
