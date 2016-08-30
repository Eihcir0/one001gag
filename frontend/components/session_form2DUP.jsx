import React from 'react';

console.log("Session form");

class sessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<h1>form here!!</h1>
		);
	}
}

export default sessionForm;
