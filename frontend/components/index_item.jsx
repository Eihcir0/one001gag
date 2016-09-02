import React from 'react';
import IndexInfoItemContainer from './index_info_item_container';
class IndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.post === undefined) {return <div>loading...</div>;}
    if (this.props.post) {
    const {title, image_url} = this.props.post;
    return (
      <li className="index-item-li-container">
        <h3 className="index-item-title">{title}</h3>
        <img className="index-item-image" src={image_url} alt="{image_url}" />
        <IndexInfoItemContainer />
    </li>);
    }
  }
}
export default IndexItem;
