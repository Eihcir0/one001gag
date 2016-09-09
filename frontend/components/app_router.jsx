import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import {App} from './app';
import homeContainer from './home_container';
import indexContainer from './index_container.jsx';
import indexDetailContainer from './index_detail_container.jsx';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }


  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
      <Router onUpdate={() => window.scrollTo(0, 0)}  history={ hashHistory }>
       <Route path="/" component={ App }>
         <IndexRoute component={ indexContainer } onEnter={ this._ensureLoggedIn } />

         <Route path="login" component={ homeContainer }
           onEnter={this._redirectIfLoggedIn}/>

         <Route path="posts/:id" component={ indexDetailContainer } />

       </Route>

     </Router>
    );
  }
}


AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
