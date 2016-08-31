import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignin = this.handleSignin.bind(this);
		this.handleGuestSignin = this.handleGuestSignin.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.currentUser){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleLogin(e){
		e.preventDefault();
		const user = this.state;
		this.props.logIn(user);
	}
	handleSignin(e){
		e.preventDefault();
		const user = this.state;
		this.props.signUp(user);
	}

	handleGuestSignin(e){
		e.preventDefault();
		const user = {username: "Guest", password: "password123"};
		this.props.logIn(user);
	}


	renderErrors(){
		if (this.props.errors) {
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);}
	}

	render() {
		console.log(this.props);
		return (
			<div className="login-form-container">
			  <form className="login-form-box">
			    <div className="login-form">
			      <label>
							<span>Username:</span>
			        <input type="text"
			          value={this.state.username}
			          onChange={this.update("username")}
			          className="login-input" />
						</label><br />
			      <label>
							<span>Password:</span>
			        <input type="password"
			          value={this.state.password}
			          onChange={this.update("password")}
			          className="login-input" />
						</label><br />
						<div className="button-container">
							<button onClick={this.handleLogin} className="login-button" name="login button">login
							</button>
							<button onClick={this.handleSignin} className="sign-up-button" name="button">
								sign-up
							</button>
						</div>
			    </div>
					<button onClick={this.handleGuestSignin} className="guest-in-button" name="button">
						GUEST LOGIN!
					</button>
			  </form>
				{ this.renderErrors() }
			</div>
		);
	}

}

export default SessionForm;
