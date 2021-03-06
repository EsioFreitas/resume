import React, {Component} from 'react'

import Title from '../UI/Title/Title'
import Project from '../../helpers/Projects'
import Button from '../UI/Button/Button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


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
               <h2 className='invite'>Conheça outros <a href="https://github.com/EsioFreitas?tab=repositories">projetos</a>...</h2>
            </section>
        );
    }

    showProject = (projectKey) =>{
        this.props.history.push(projectKey);
        this.props.getProjetcId(projectKey)
        this.props.setProjectState()
    } 
}

const mapStateToProps = state =>{
    return{
        id: state.postId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getProjetcId: (id) => dispatch({type: 'GETPROJECTID', projectId: id}),
        setProjectState: () => dispatch({type: 'VIEWPROJECT'})
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Projects));