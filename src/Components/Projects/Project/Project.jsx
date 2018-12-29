import React from 'react'

import './Project.scss'

const project = props =>(
    <div className='project'>
        <img alt='Portfólio' className='project__foto' />
        <div className='project__content'>
            <h1>Nuntium</h1>
            <h3>Ruby on Rails</h3>
            <p>Um texto bem legal do projeto aqui ta</p>
            <div className='tecnologies'>
                <p><strong>Tecnologias: </strong>Ruby on Rails.</p>
                <a target="blank">
                    <img alt='GitHub' className='pulsate-fwd ' />
                </a>
            </div>
        </div>
    </div>
);

export default project;