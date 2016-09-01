import React from 'react';
import { Link, hashHistory } from 'react-router';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e){
		e.preventDefault();
		this.props.logOut();
    hashHistory.push("/login");

	}
  componentWillUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.currentUser){
			hashHistory.push("/login");
		}
	}

  render() {
    return (
      <div className="whole-bar-container">
        <div className="left-side-container">
          <img className="title-logo-navbar" src="http://res.cloudinary.com/one001gag/image/upload/v1472693768/0ne001gaglogo_ezwrht.png" />
          <button className="hot-button" name="hot button">Hot
          </button>
          <button className="fresh-button" name="fresh button">Fresh
          </button>
        </div>
        <div className="right-side-container">
          <button onClick={this.handleLogout} className="logout-button" name="logout-button">
            log out
          </button>
          <button className="upload-button" name="upload-button">
            + UPLOAD
          </button>

        </div>
      </div>
    );
  }
}

export default Navbar;
