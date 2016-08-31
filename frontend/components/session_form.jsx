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
		console.log(e);
		console.log(user);
		this.props.signUp(user);
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
			      <label> Username:
			        <input type="text"
			          value={this.state.username}
			          onChange={this.update("username")}
			          className="login-input" />
			      </label>
			      <label> Password:
			        <input type="password"
			          value={this.state.password}
			          onChange={this.update("password")}
			          className="login-input" />
			      </label>
						<button onClick={this.handleLogin} className="login-button" name="login button">login
						</button>
						<button onClick={this.handleSignin} className="sign-up-button" name="button">
							sign-up
						</button>
						<button onClick={this.handleSignin} className="guest-in-button" name="button">
							GUEST LOGIN!
						</button>
			    </div>
			  </form>
				{ this.renderErrors() }
			</div>
		);
	}

}

export default SessionForm;
