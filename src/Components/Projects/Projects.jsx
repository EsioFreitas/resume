import React, {Component} from 'react'

import Title from '../UI/Title/Title'

import './Projects.scss'

class Projects extends Component {
    render(){
        return(
            <section className='projects'>
                <Title title='PROJETOS'/>
            </section>
        );
    }
}

export default Projects;