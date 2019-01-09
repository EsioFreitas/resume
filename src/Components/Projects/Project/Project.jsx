import React from 'react'

import githubIcon from '../../../Assets/icons/github-logo.svg'
import e from '../../../Assets/img/nuntium.jpg'

import Carousel from 'nuka-carousel'

import './Project.scss'

const project = props =>{
    let data = props.data
    return(
        <div className='project'>
            <div className='project__img'>
                <Carousel>
                    <img src={e} alt='a'/>
                </Carousel>
            </div>
            <div className='project__content'>
                <h1>{data.title}</h1>
                <h2>{data.whats}</h2>
                <p>{data.description}</p>
                <div className='tecnologies'>
                    <p><strong>Tecnologias: </strong> {data.technologies.join(', ')}.</p>
                    <a target="blank" href={data.repository}>
                        <img alt='GitHub' className='pulsate-fwd pulsate-fwd ' src={githubIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default project;