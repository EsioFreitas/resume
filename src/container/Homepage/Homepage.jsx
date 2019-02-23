import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom'

import Invitation from '../../Components/Invitation/Invitation'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Skills from '../../Components/Skills/Skills'
import Education from '../../Components/Education/Education'
import Experience from '../../Components/Experience/Experience'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/UI/Navbar/Navbar'



class Homepage extends Component {
  state={
    modalShow: false
  }
  render() {
    return (
        <Fragment>
          <Invitation/>
          <Navbar/>
          <About/>
          <Projects showProject={this.showProject}
                    closeProject={this.closeProject}
                    modalProject={this.modalProject}/>
          <Skills/>
          <Education/>
            <Experience/>
          <Footer/> 
        {console.log(this.props)}
        </Fragment>
    );
  }
}

export default Homepage;
