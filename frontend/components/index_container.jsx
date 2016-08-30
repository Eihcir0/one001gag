// PLACE HOLDER !!! THIS HAS NOT BEEN UPDATED
import { connect } from 'react-redux';
import {index} from './index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logIn: (user) => dispatch(logIn(user)),
  signUp: (user) => dispatch(signUp(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
