import React from 'react'

import Title from '../UI/Title/Title'

import './About.scss'
import foto from '../../Assets/img/esio.jpg'

const about = () =>(
    <section className='about' id='about-page'>
        <Title title='SOBRE'/>
        <div className='about__content'>
            <img src={foto} alt='Esio Freitas'/>
            <p>
            <strong>Apaixonado pela área de desenvolvimento de software</strong>, sou um <strong>empreendor</strong> que procura todos 
                os dias a aprender e aperfeiçoar minhas habilidades utilizando-se de
                 boas práticas de programação. Além disso, sou 
                entusiasta no desenvolvimento web com experiência em 
                <strong> React</strong>, <strong>Ruby on Rails</strong>, <strong>Flask </strong>
                 e <strong>Sass</strong>. Sou muito familiarizado com trabalho em equipe e procuro 
                 sempre tomar iniciativa nos projetos que participo.
            </p>
        </div>
    </section>
);

export default about;