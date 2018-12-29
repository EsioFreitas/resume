import React, { Component, Fragment } from 'react';

import Invitation from './Components/Invitation/Invitation'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

import './App.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Invitation/>
        <About/>
        <Projects/>
        <Skills/>
      </Fragment>
    );
  }
}

export default App;
