import { connect } from 'react-redux';
import {logOut} from './../actions/session_actions.js';
import Navbar from './navbar.jsx';
import {receiveFilter} from './../actions/filter_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  filter: state.filter.filter
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
