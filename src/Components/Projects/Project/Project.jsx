import React from 'react'

import './Project.scss'

const project = props =>{
    let data = props.data
    return(
        <div className='project'>
            <div className='project__img' alt='Portfólio'/>
            <div className='project__content'>
                <h1>{data.title}</h1>
                <h2>{data.whats}</h2>
                <p>{data.description}</p>
                <div className='tecnologies'>
                    <p><strong>Tecnologias: </strong> {data.technologies.join(', ')}.</p>
                    <a target="blank">
                        <img alt='GitHub' className='pulsate-fwd ' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default project;