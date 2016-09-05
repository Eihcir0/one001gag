import React from 'react';

class IndexInfoItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let points = Math.floor(Math.random()*1000);
    let numComments =
    (this.props.post.num_comments===null ? 0 : this.props.post.num_comments);

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
          <button className="comment-button" name="comment-button">💬
          </button>
        </div>
      </div>
  );}
}
export default IndexInfoItem;
