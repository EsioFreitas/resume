import React from 'react'

import Title from '../UI/Title/Title'

import './Education.scss'

const education = () =>(
    <section className='education'>
        <Title title="EDUCAÇÃO"/>
        <div className='education__text'>
            <h1>Engenharia de Software</h1>
            <h2>Universidade de Brasília - UnB</h2>
            <p>2017 - Atualmente</p>
        </div>
    </section>
);

export default education;