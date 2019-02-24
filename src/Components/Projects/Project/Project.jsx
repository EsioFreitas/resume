import React, {Component}from 'react'
import {connect} from 'react-redux'
import Navbar from '../../UI/Navbar/ProjectNavbar/Navbar'

import githubIcon from '../../../Assets/icons/github-logo.svg';
import Carousel from 'nuka-carousel'

import './Project.scss'

class project extends Component {
    render(){
        let data = this.props.project
        return(
             <div className='project'>
                <Navbar/>

                <div className='project__img'>
                     <Carousel autoplay={true} >
                        {
                            Object.keys(data.carousel).map(key=>(
                                <img src={data.carousel[key]} alt='Carousel image' key={key}/>
                                ))
                        }
                    </Carousel> 
                </div>
                <div className='project__content'>
                {console.log(this.props)}
                    <h1>{data.title}</h1>
                    <h2>{data.whats}</h2>
                    <p>{data.description}</p>
                    <div className='tecnologies'>
                        <p><strong>Tecnologias: </strong> {data.technologies.join(', ')}.</p>
                    </div>
                    <a target="blank" href={data.repository}>
                        <img alt='GitHub' className='pulsate-fwd pulsate-fwd ' src={githubIcon} />
                    </a>
                </div> 
            </div> 
        )
    }
}


const mapStateToProps = state =>{
    return{
        project: state.projects
    }
}

export default connect(mapStateToProps)(project);