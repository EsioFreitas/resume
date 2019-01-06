import React, {Component} from 'react'

import Title from '../UI/Title/Title'
import Project from '../../helpers/Projects'
import Button from '../UI/Button/Button'
import ProjectMod from './Project/Project'

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
                                        <Button classbutton='cards'
                                                click={()=> this.showProject(key)}>Leia sobre</Button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }

    showProject = (project) =>{
        this.props.showProject()
        this.props.modalProject(<ProjectMod data={this.state.projects[project]}/>)
        console.log(project)
    } 
}

export default Projects;