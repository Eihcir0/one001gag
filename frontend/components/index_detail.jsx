import React from 'react';
import NavbarContainer from './navbar_container.jsx';
import IndexItemShow from './index_item_show';
import { withRouter } from 'react-router';
import { Link, hashHistory } from 'react-router';
import CommentDetail from './comment_detail';

class IndexDetail extends React.Component {
  constructor(props){
    super(props);
    // this.postId = this.props.params.id;
    this.state = {commentBody: ""};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestPost(this.props.params.id);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleCommentSubmit () {
    let comment = {body: this.state.commentBody,
      post_id: this.props.params.id};
      this.props.createComment(comment);

  }

  render() {
    let post = this.props.posts.posts[this.props.params.id];

    if (post===undefined) {return <div>Loading...</div>;}
    else {
    let comments = post.comments.map((comment) => (
      <CommentDetail key={comment.id} comment={comment}/>
    ));
    return (
        <div className="index-detail-page">
          <NavbarContainer/>
          <section className="index-detail-container">
            <IndexItemShow key={post.id} post={post} />
            <div className="create-post-form">
                <form className="new-comment-form" onSubmit={this.handleCommentSubmit}>
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
                  <button className="post-comment-button">Post</button>
                </form>
            </div>
            {comments}
      </section>
    </div>
    );
  }}
}
export default withRouter (IndexDetail);
