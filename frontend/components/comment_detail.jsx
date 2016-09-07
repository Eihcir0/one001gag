import React from 'react';

class CommentDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <li className="commentDetailItem">
        <span className="commentorName">
          {this.props.comment.username} on {this.props.comment.created_at}: </span>
        <br/>

        <span className="commentBody">
          {this.props.comment.body} </span>

      </li>
  );}
}
export default CommentDetail;
