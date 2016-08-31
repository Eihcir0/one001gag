import React from 'react';
import IndexItem from './index_item.jsx';

class Index extends React.Component {
  componentDidMount() {
    debugger
    this.props.requestPosts();
  }

  render() {
    debugger
    let posts = this.props.posts;
    return(
      <div>
        <ul className="posts-index">
          {posts.keys.map(post => <IndexItem
            key={`index-item${post.id}`}
            post={post}/>)}
        </ul>
      </div>
    );
  }
}

export default Index;
