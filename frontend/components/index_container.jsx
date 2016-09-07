import { connect } from 'react-redux';
import Index from './index';
import {requestPosts}
  from './../actions/posts_actions';

const mapStateToProps = state => ({
  posts: state.posts,
  filter: state.filter.filter
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
