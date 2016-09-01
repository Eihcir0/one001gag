import { connect } from 'react-redux';
import {logOut} from './../actions/session_actions.js';
import Navbar from './navbar.jsx';


const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
