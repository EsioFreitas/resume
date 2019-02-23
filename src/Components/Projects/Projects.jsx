import React, {Component} from 'react'

import Title from '../UI/Title/Title'
import Project from '../../helpers/Projects'
import Button from '../UI/Button/Button'
import ProjectMod from './Project/Project'
import {withRouter} from 'react-router-dom'


import './Projects.scss'


class Projects extends Component {
    state ={
        projects: Project
    }
    render(){
        let {projects} = this.state
        return(
            <section className='projects-page' id='projects-page'>
                <Title title='PROJETOS'/>
                <div className='projects'>
                    {
                        
                        Object.keys(projects).reverse().map(key=>(
                            <div key={key} className='project'
                                  style={{
                                    backgroundImage: `url(${projects[key].photo})`
                                 }} >
                                <div className='project--container'>
                                    <div className='project__text '>
                                        <h1 className='tracking-in-expand'>{projects[key].title}</h1>
                                        <h2 className='tracking-in-expand'>{projects[key].subtitle}</h2>
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

    showProject = (projectKey) =>{
        this.props.showProject()
        this.props.history.push('/project/'+projectKey);
        //this.props.modalProject(<ProjectMod data={this.state.projects[project]}/>)
        //console.log(project)
    } 
}

export default withRouter (Projects);