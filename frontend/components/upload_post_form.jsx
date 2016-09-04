import React from 'react';
import { Link, hashHistory } from 'react-router';

class uploadPostForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {title: "", image_url: ""};
		this.handleSubmit = this.handleSubmit.bind(this);

  }

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e) {
		e.preventDefault();
			let post = {post: this.state};
			this.props.createPost(post);
		}
		render () {
		    return (
		    <section className="upload-form-container">
		      <form onSubmit={this.handleSubmit} className="form">
		        <h1 className="form-h1">Upload a Post</h1>

		        <label className="form-input-label">Title
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="create-post-input" />
		        </label>

		        <label className="form-input-label">url
							<input type="text"
								value={this.state.image_url}
								onChange={this.update("image_url")}
								className="create-post-input" />
		        </label>

						<button onClick={this.handleSubmit} className="submit-post-button" name="submit_post_button">Submit
						</button>


		      </form>
		  </section>
		    );
		  }




}//end class

export default uploadPostForm;
