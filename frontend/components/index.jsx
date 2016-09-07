import React from 'react';
import IndexItem from './index_item.jsx';
import NavbarContainer from './navbar_container.jsx';


class Index extends React.Component {
  componentDidMount() {

    this.props.requestPosts();
  }

  render() {
    let posts = this.props.posts.posts;
    let keys = Object.keys(posts);
    let aa, bb;
    let postsArray = [];
    let tempPostsArray = keys.map((key) => (
      {id: key, created_at: posts[key].created_at, votes: posts[key].votes, comments: posts[key].comments, num_comments: (posts[key].num_comments===null ? 0 : posts[key].num_comments), total_points: (posts[key].total_points===null ? 0 : posts[key].total_points), title: posts[key].title, image_url: posts[key].image_url}));

    if (this.props.filter==="HOT") {
      console.log(tempPostsArray);
      postsArray = tempPostsArray.sort((a,b) => {

        aa = posts[a.id].total_points;
        bb = posts[b.id].total_points;

        return aa > bb ? -1 : aa < bb ? 1 : 0;
      });
      console.log(postsArray);
    }
      else if (this.props.filter==="FRESH") {
        postsArray = tempPostsArray.sort((a,b) => {
          aa = posts[a.id].created_at;
          bb = posts[b.id].created_at;

          return aa > bb ? -1 : aa < bb ? 1 : 0;
        }).reverse();}
        else {postsArray = tempPostsArray;}



    let displayArray = postsArray.map((post) => (
      <IndexItem key={post.id} post={post} />));

    return(
      <section className="index-page">
          <NavbarContainer/>
          <div className="ul-container">
            <ul className="index-item-list">
              {displayArray}
            </ul>
          </div>
      </section>
    );
  }
}

export default Index;



//
// <ul className="posts-index">
//   {posts.keys.map(post => <IndexItem
//     key={`index-item${post.id}`}
//     post={post}/>)}
// </ul>
