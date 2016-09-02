import { connect } from 'react-redux';
import IndexDetail from './index_detail';
import {requestPost} from './../actions/posts_actions';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  requestPost: (postId) => dispatch(requestPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexDetail);
