import React from 'react';
import IndexItem from './index_item.jsx';

class Index extends React.Component {
  componentDidMount() {

    this.props.requestPosts();
  }

  render() {
    let posts = this.props.posts.posts;
    let keys = Object.keys(posts);
    let postsArray = keys.map((key) => ({id: key, title: posts[key].title, url: posts[key].image_url}));
    let displayArray = [];
    return(
      <div>
        {displayArray}
      </div>
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
