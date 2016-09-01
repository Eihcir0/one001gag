import { connect } from 'react-redux';
import {logOut} from './../actions/session_actions.js';
import IndexInfoItem from './index_info_item.jsx';

//
// const mapDispatchToProps = dispatch => ({
//   logOut: () => dispatch(logOut())
// });

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  null
)(IndexInfoItem);
