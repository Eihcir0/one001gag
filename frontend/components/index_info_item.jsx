import React from 'react';
import {hashHistory } from 'react-router';


class IndexInfoItem extends React.Component {
  constructor(props){
    super(props);

  }

  handleCommentButtonClick() {
      hashHistory.push(
        `/posts/${(parseInt(this.props.post.id))}`);
  }

  render() {
    let points = Math.floor(Math.random()*1000);
    let numComments =
    (this.props.post.num_comments===null ? 0 : this.props.post.num_comments);
    this.handleCommentButtonClick = this.handleCommentButtonClick.bind(this);

    // ·

    return (
      <div>
        <span className="points-comments">
          {points} points · {numComments} comments</span>
        <div className="vote-comment-button-container">
          <button className="upvote-button" name="upvote-button">▲ UP
          </button>
          <button className="downvote-button" name="downvote-button">▼
          </button>
          <button onClick={this.handleCommentButtonClick} className="comment-button" name="comment-button">💬
          </button>
        </div>
      </div>
  );}
}
export default IndexInfoItem;
