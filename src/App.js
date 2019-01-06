import React, { Component, Fragment } from 'react';

import Invitation from './Components/Invitation/Invitation'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Modal from './Components/UI/Modal/Modal'

import './App.css';

let content = null
class App extends Component {
  state={
    modalShow: false
  }
  render() {
    return (
      <div>
        <Modal show={this.state.modalShow} closeModal={this.closeProject}>
          {content}
        </Modal>

        <Fragment>
          <Invitation/>
          <About/>
          <Projects showProject={this.showProject}
                    closeProject={this.closeProject}
                    modalProject={this.modalProject}/>
          <Skills/>
          <Education/>
          <Experience/>
          <Footer/>
        </Fragment>
      </div>
    );
  }

  showProject = () =>{this.setState({modalShow: true})}

  closeProject = () =>{this.setState({modalShow: false})}

  modalProject = (project) => {
    content = <Fragment>{project}</Fragment>
  }
}

export default App;
