import React from 'react';
import { Link, hashHistory } from 'react-router';

class uploadPostForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {title: "", image_url: "", thumbnail_url: "", errors: false};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
  }

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e) {
		e.preventDefault();
			let post = {title: this.state.title, image_url: this.state.image_url};
			if (this.state.image_url === "" || this.state.title === "") {
				this.setState({errors: true});
			} else {
			this.props.closeModal();
			this.props.createPost(post);
		}}

		uploadImage (e) {
	     e.preventDefault();
	     cloudinary.openUploadWidget(
	       window.cloudinary_options,
	       (error, results) => {
	         if (!error) {
						 this.setState({thumbnail_url: results[0].thumbnail_url });
						 this.setState({image_url: results[0].url});

	         }
	       }
	     );
	   }

		render () {
			if (this.state.image_url !== "") {
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
						<img className="upload-image" src={this.state.thumbnail_url} />
						<button onClick={this.handleSubmit} className="submit-post-button" name="submit_post_button">Submit
						</button>


		      </form>
					<br/>
					<span>{(this.state.errors) ? "Posts must contain an image and a title!" : ""}</span>
		  </section>
		    );
			} else {
		    return (
		    <section className="upload-form-container">
		      <form className="form">
		        <h1 className="form-h1">Upload a Post</h1>

		        <label className="form-input-label">Title
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="create-post-input" />
		        </label>

						<br/>
						<button onClick={this.uploadImage} className="upload-image-button" name="upload-image-button">
							Upload Image
						</button>



		      </form>
					<br/>

		  </section>
		    );
		  }}




}//end class

export default uploadPostForm;
