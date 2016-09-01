import React from 'react';

class IndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const {title, image_url} = this.props.post;
    console.log(title);
    console.log(image_url);
    return (
      <li className="index-item-li-container">
        <img src={image_url} alt="{image_url}" />
    </li>);
  }
}
export default IndexItem;

// <h2 className="index-item-title">"{title}"</h2>
// <img className="index-item-image" src="`${image_url}`" alt="`${title}`" />
//
// render() {
//   const { title, image_url } = this.props.post
//   let detail;
//
//   return (
//     <li className="index-item">
//       <div className="index-item-header">
//       </div>
//       { detail }
//     </li>
//   );
// }
// };
