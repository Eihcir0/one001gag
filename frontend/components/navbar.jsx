import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import {ModalStyle} from './modal_style';
import UploadPostFormContainer from './upload_post_form_container';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleCloseModal = this.handleUploadClick.bind(this);
    this.state = {modalOpen: false};
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

  handleUploadClick() {
    this.setState({modalOpen: true});
  }


  render() {
    return (
      <div className="whole-bar-container">
        <div className="left-side-container">
          <a className="header-link" href="#/">
            <img className="title-logo-navbar" src="http://res.cloudinary.com/one001gag/image/upload/v1472693768/0ne001gaglogo_ezwrht.png"/>
          </a>
          <button className="hot-button" name="hot button">Hot
          </button>
          <button className="fresh-button" name="fresh button">Fresh
          </button>
        </div>
        <div className="right-side-container">
          <button onClick={this.handleLogout}
            className="logout-button" name="logout-button">
            log out
          </button>
          <button className="upload-button" id="upload-button"
            name="upload-button"
            onClick={this.handleUploadClick}>
            + UPLOAD
          </button>

        </div>
        <Modal className="uploadModal"
          isOpen={this.state.modalOpen}
          onRequestClose={()=>(this.setState({modalOpen: false}))}
          style={ModalStyle}
          >
          <button className="modal-close-button"
            onClick={()=>(this.setState({modalOpen: false}))}>
            ✖
          </button>
          <UploadPostFormContainer closeModal={this.setState.bind(this,{modalOpen: false})}/>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
