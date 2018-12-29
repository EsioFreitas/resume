import React, {Component} from 'react'

import Title from '../UI/Title/Title'
import Project from '../../helpers/Projects'

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
                                
                            </div>
                        ))
                    }
                </div>
                
            </section>
        );
    }
}

export default Projects;