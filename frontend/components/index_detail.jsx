import React from 'react';
import NavbarContainer from './navbar_container.jsx';
import IndexItem from './index_item';
import { withRouter } from 'react-router';

class IndexDetail extends React.Component {
  constructor(props){
    super(props);
    this.postId = this.props.params.id;
    // debugger;
  }

  componentDidMount() {
    // debugger;
    this.props.requestPost(this.postId);
  }


  render() {
    // debugger;
    let post = this.props.posts.posts[this.postId];
    return (
      <section className="index-detail-page">
        <NavbarContainer/>
        <IndexItem key={this.postId} post={post} />
      </section>
    );
  }
}
export default withRouter (IndexDetail);
