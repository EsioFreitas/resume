import React, { Component, Fragment} from 'react';
import { Route} from 'react-router-dom'

import Homepage from './container/Homepage/Homepage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path='/p' exact component={Homepage}/>
        <Route path='/' exact render={()=><h1>oi</h1>}/>
      </Fragment>
    );
  }
}

export default App;
