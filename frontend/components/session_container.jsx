///coppied from benchbnb

import { connect } from 'react-redux';
import {logIn} from './../actions/session_actions.js';
import {signUp} from './../actions/session_actions.js';
import SessionForm from './session_form.jsx';

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
)(SessionForm);
