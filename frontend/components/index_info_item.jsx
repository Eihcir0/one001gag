import React from 'react';
import {hashHistory } from 'react-router';


class IndexInfoItem extends React.Component {
  constructor(props){
    super(props);
    this.handleCommentButtonClick = this.handleCommentButtonClick.bind(this);
    this.currentUserId = this.props.session.currentUser.id;
    this.currentUserVoteValue = this.currentUserVoteValue.bind(this);
    this.currentUserUpvote = this.currentUserUpvote.bind(this);
    this.currentUserDownvote = this.currentUserDownvote.bind(this);
    this.commentButton = this.commentButton.bind(this);
    this.handleUpVoteButton = this.handleUpVoteButton.bind(this);
    this.handleDownVoteButton = this.handleDownVoteButton.bind(this);
  }

  handleCommentButtonClick() {
      hashHistory.push(
        `/posts/${(parseInt(this.props.post.id))}`);


  }

  handleUpVoteButton () {
    let vote;
    if (this.currentUserDownvote()) {
      vote = {id: this.currentUserVote().id, vote_value: 1};
      this.props.updateVote(vote);
    }
    else if (!this.currentUserUpvote()) {
      vote = {post_id: this.props.post.id, vote_value: 1};
      this.props.createVote(vote);
    }
    else if (this.currentUserUpvote()) {
      vote = {id: this.currentUserVote().id};
      this.props.destroyVote(vote);
    }
  }

  handleDownVoteButton () {
    let vote;
    if (this.currentUserUpvote()) {
      vote = {id: this.currentUserVote().id, vote_value: -1};
      this.props.updateVote(vote);

    } else if (!this.currentUserDownvote())   {
      vote = {post_id: this.props.post.id, vote_value: -1};
      console.log("createUpVote");
      this.props.createVote(vote);
    }
    else if (this.currentUserDownvote()) {
      vote = {id: this.currentUserVote().id};
      this.props.destroyVote(vote);
    }
  }

  currentUserVoteValue() {

    let tester;
    if(this.props.post.votes) {
    tester = this.props.post.votes[this.props.post.votes.map(vote => vote.user_id).indexOf(this.currentUserId)];
    }

    if (tester) {return tester.vote_value;}
   else {return null;}
  }
  currentUserVote() {

    let tester;
    if(this.props.post.votes) {
    tester = this.props.post.votes[this.props.post.votes.map(vote => vote.user_id).indexOf(this.currentUserId)];
    }

    if (tester) {return tester;}
   else {return null;}
  }

  currentUserUpvote() {
    return (this.currentUserVoteValue()===1);
  }

  currentUserDownvote() {
    return (this.currentUserVoteValue()===-1);
  }

  commentButton() {
    if (!this.props.show) {
      return (
    <button onClick={this.handleCommentButtonClick} className="comment-button" name="comment-button">💬
    </button>
  );} else {return (<span/>);}
  }
  render() {
    let points =
    (this.props.post.total_points===null ? 0 : this.props.post.total_points);
    let numComments =
    (this.props.post.num_comments===null ? 0 : this.props.post.num_comments);
    // ·
    let uvoteClassname;
    let dvoteClassname;

    if (this.currentUserUpvote()) {
      uvoteClassname = "hasVotedVoteButton";
      dvoteClassname = "hasVotedOtherButton";
    } else if (this.currentUserDownvote()) {
      dvoteClassname = "hasVotedVoteButton";
      uvoteClassname = "hasVotedOtherButton";
    } else {
      dvoteClassname = "normalVoteButton";
      uvoteClassname = "normalVoteButton";

    }

    return (
      <div>
        <span className="points-comments">
          {points} points · {numComments} comments</span>
        <div className="vote-comment-button-container">
          <button className={uvoteClassname} name="upvote-button"
            onClick={this.handleUpVoteButton}>▲ UP
          </button>
          <button className={dvoteClassname} name="downvote-button"
            onClick={this.handleDownVoteButton}>▼
          </button>
          {this.commentButton()}
        </div>
      </div>
  );}
}
export default IndexInfoItem;
