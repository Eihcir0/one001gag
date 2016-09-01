import React from 'react';

class IndexInfoItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let points = Math.floor(Math.random()*1000);
    let comments = Math.floor(Math.random()*100);

    // ·

    return (
      <div>
        <span className="points-comments">{points} points · {comments} comments</span>
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
