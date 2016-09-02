import React from 'react';
import NavbarContainer from './navbar_container.jsx';
import IndexItem from './index_item';
import { withRouter } from 'react-router';

class IndexDetail extends React.Component {
  constructor(props){
    super(props);
    this.postId = this.props.params.id;
    this.post = this.props.posts[this.props.params.id];
    debugger;
  }

  componentDidMount() {
    this.props.requestPost(this.postId);
  }


  render() {
    debugger;
    return (
      <section className="index-detail-page">
        <NavbarContainer/>
        <IndexItem key={this.postId} post={this.post} />
      </section>
    );
  }
}
export default withRouter (IndexDetail);
