import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom'

import Invitation from '../../Components/Invitation/Invitation'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Skills from '../../Components/Skills/Skills'
import Education from '../../Components/Education/Education'
import Experience from '../../Components/Experience/Experience'
import Footer from '../../Components/UI/Footer/Footer'
import Navbar from '../../Components/UI/Navbar/HomeNavbar/Navbar'
class Homepage extends Component {
  render() {
    return (
        <Fragment>
          <Invitation/>
          <Navbar/>
          <About/>
          <Projects/>
          <Skills/>
          <Education/>
            <Experience/>
          <Footer/>
        </Fragment>
    );
  }
}

export default withRouter (Homepage);
