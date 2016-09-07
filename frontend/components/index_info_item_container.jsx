import { connect } from 'react-redux';
import {logOut} from './../actions/session_actions.js';
import IndexInfoItem from './index_info_item.jsx';
import {createVote, destroyVote, updateVote} from './../actions/posts_actions';

const mapStateToProps = state => ({
  posts: state.posts,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  createVote: (vote) => dispatch(createVote(vote)),
  destroyVote: (vote) => dispatch(destroyVote(vote)),
  updateVote: (vote) => dispatch(updateVote(vote))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexInfoItem);
