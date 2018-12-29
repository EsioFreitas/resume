import React, {Component} from 'react'

import Title from '../UI/Title/Title'
import Project from '../../helpers/Projects'
import Button from '../UI/Button/Button'

import './Projects.scss'


class Projects extends Component {
    state ={
        projects: Project
    }
    render(){
        let {projects} = this.state 
        return(
            <section className='projects-page'>
                <Title title='PROJETOS'/>
                <div className='projects'>
                    {
                        Object.keys(projects).map(key=>(
                            <div key={key} className='project'>
                                <div className='project--container'>
                                    <div className='project__text'>
                                        <h1>{projects[key].title}</h1>
                                        <h2>{projects[key].subtitle}</h2>
                                    </div>
                                    <div className='button'>
                                        <Button classbutton='cards'>Leia sobre</Button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </section>
        );
    }
}

export default Projects;