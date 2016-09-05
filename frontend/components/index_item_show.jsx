import React from 'react';
import {hashHistory } from 'react-router';
import IndexInfoItemContainer from './index_info_item_container';


class IndexItemShow extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    debugger;
    hashHistory.push(`/posts/${this.props.post.id + 1}`);
  }

  nextButton() {

        return (
          <div className="cool-button" onClick={this.handleClick}>
            <button className="next-button" name="next-button">
              NEXT POST
            </button>
            <div className="arrow-right" />
          </div>
        );
      }




  render() {
    if (this.props.post === undefined) {return <div>loading...</div>;}
    if (this.props.post) {
    const {title, image_url} = this.props.post;
    return (
      <li className="index-item-li-container">
        <h2 className="index-item-title-show">{title}</h2>
        <div className="parent-info-item">
          <IndexInfoItemContainer post={this.props.post}/>
          {this.nextButton()}

        </div>
        <img className="index-item-image" src={image_url} alt="{image_url}" />
    </li>);
    }
  }
}
export default IndexItemShow;
