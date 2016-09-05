import React from 'react';

class CommentDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="commentDetailItem">
        <span className="commentorName">
          {this.props.comment.user_id} wrote: </span>
        <br/>

        <span className="commentBody">
          {this.props.comment.body} </span>

      </div>
  );}
}
export default CommentDetail;
