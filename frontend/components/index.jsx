import React from 'react';
import IndexItem from './index_item.jsx';

class Index extends React.Component {
  componentDidMount() {

    this.props.requestPosts();
  }

  render() {
    let posts = this.props.posts;
    debugger;
    return(
      <div>
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
