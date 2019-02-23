import React, { Component, Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Homepage from './container/Homepage/Homepage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Homepage/>
      </BrowserRouter>
    );
  }
}

export default App;
