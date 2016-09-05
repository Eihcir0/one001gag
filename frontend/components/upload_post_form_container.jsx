import { connect } from 'react-redux';
import uploadPostForm from './upload_post_form';
import {createPost} from './../actions/posts_actions';


const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  null,
  mapDispatchToProps
)(uploadPostForm);
