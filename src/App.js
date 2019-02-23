import React, { Component, Fragment} from 'react';
import { Route, withRouter} from 'react-router-dom'
import Project from './Components/Projects/Project/Project'

import Homepage from './container/Homepage/Homepage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path='/p' exact component={Homepage}/>
        <Route path='/' exact render={()=><h1>oi</h1>}/>
        <Route path='/project/kalkuli' exact render={Project}/>

      </Fragment>
    );
  }
}

export default withRouter (App);
