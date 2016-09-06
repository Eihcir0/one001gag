import { connect } from 'react-redux';
import IndexDetail from './index_detail';
import {requestPosts, createComment} from './../actions/posts_actions';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexDetail);
