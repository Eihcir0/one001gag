import React from 'react';
import NavbarContainer from './navbar_container.jsx';
import IndexItemShow from './index_item_show';
import { withRouter } from 'react-router';
import CommentDetail from './comment_detail';

class IndexDetail extends React.Component {
  constructor(props){
    super(props);
    // this.postId = this.props.params.id;
    this.state = {commentBody: ""};
    this.state.postId = this.props.params.id;
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestPosts();
  }


  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleCommentSubmit (e) {
    e.preventDefault();
    let comment = {body: this.state.commentBody,
      post_id: this.state.postId};

    this.props.createComment(comment);
    this.setState({commentBody: ""});
    this.props.requestPosts();


  }

  render() {
    let post = this.props.posts.posts[this.props.params.id];

    if (post===undefined) {return <div>Loading...</div>;}
    else {
    let comments = post.all_comments.map((comment) => (
      <CommentDetail key={comment.id} comment={comment}/>
    ));
    comments = comments.slice(0).reverse();
    let postKeys = Object.keys(this.props.posts.posts);
    let lastOne = postKeys[postKeys.length - 1] == post.id;
    return (
        <div className="index-detail-page">
          <NavbarContainer/>
          <section className="index-detail-container">
            <IndexItemShow lastPost={lastOne} key={post.id} post={post} />
            <div className="create-post-form">
                <form onSubmit={this.handleCommentSubmit} className="new-comment-form" >
                  <div className="comment-body">
                    <input type="text"

                      className="comment-text-input"
                      ref="body"
                      cols='60'
                      placeholder = "Write comment..."
                      value={this.state.commentBody}
                      rows='5'
                      onChange={this.update('commentBody')}></input>
                  </div>
                  <button type="submit" className="post-comment-button" >
                    Post
                  </button>

                </form>
            </div>
            <br/>
            <ul className="comments-list">
              {comments}
            </ul>
      </section>
    </div>
    );
  }}
}
export default withRouter (IndexDetail);
