import React from 'react';
import IndexItem from './index_item.jsx';
import NavbarContainer from './navbar_container.jsx';
// <Navbar/>

class Index extends React.Component {
  componentDidMount() {

    this.props.requestPosts();
  }

  render() {
    let posts = this.props.posts.posts;
    let keys = Object.keys(posts);
    let postsArray = keys.map((key) => (
      {id: key, comments: posts[key].comments, num_comments: (posts[key].num_comments===null ? 0 : posts[key].num_comments), title: posts[key].title, image_url: posts[key].image_url}));
    let displayArray = postsArray.map((post) => (
      <IndexItem key={post.id} post={post} />));

    return(
      <section className="index-page">
          <NavbarContainer/>
          <div className="ul-container">
            <ul className="index-item-list">
              {displayArray}
            </ul>
          </div>
      </section>
    );
  }
}

export default Index;



//
// <ul className="posts-index">
//   {posts.keys.map(post => <IndexItem
//     key={`index-item${post.id}`}
//     post={post}/>)}
// </ul>
