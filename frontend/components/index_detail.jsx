import React from 'react';
import NavbarContainer from './navbar_container.jsx';
import IndexItemShow from './index_item_show';
import { withRouter } from 'react-router';

class IndexDetail extends React.Component {
  constructor(props){
    super(props);
    this.postId = this.props.params.id;
    this.commentBody = "";
  }

  componentDidMount() {
    this.props.requestPost(this.postId);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  handleCommentSubmit () {
    return ()=>true;
  }

  render() {
    let post = this.props.posts.posts[this.postId];
    return (
        <div className="index-detail-page">
          <NavbarContainer/>
          <section className="index-detail-container">
            <IndexItemShow key={this.postId} post={post} />
            <div className="create-post-form">
                <form className="new-comment-form" onSubmit={this.handleCommentSubmit()}>
                  <div className="comment-body">
                    <textarea
                      className="comment-text-input"
                      ref="body"
                      cols='60'
                      value={this.commentBody ? this.commentBody : "Write comment..."}
                      rows='5'
                      onChange={this.update('commentBody')}></textarea>
                  </div>
                  <button className="post-comment-button">Post</button>
                </form>
            </div>
            <br/>
            <div className="comments-items">
            <p>Jose: 1st comment!!!</p>
            <br/>
            <p>John B: This post sucks!</p>
            <br/>
            <p>Joe B: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>
    );
  }
}
export default withRouter (IndexDetail);
