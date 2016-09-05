import React from 'react';
import {hashHistory } from 'react-router';

import IndexInfoItemContainer from './index_info_item_container';

class IndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (postId) {
    hashHistory.push(`/posts/${this.props.post.id}`);
  }

  render() {
    if (this.props.post === undefined) {return <div>loading...</div>;}
    if (this.props.post) {
    const {title, image_url} = this.props.post;
    return (
      <li className="index-item-li-container">
        <h3 className="index-item-title" onClick={this.handleClick}>{title}</h3>
        <img className="index-item-image" src={image_url} alt="{image_url}" onClick={this.handleClick} />
        <IndexInfoItemContainer post={this.props.post} />
    </li>);
    }
  }
}
export default IndexItem;
