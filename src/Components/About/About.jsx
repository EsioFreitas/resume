import React from 'react'

import Title from '../UI/Title/Title'

import './About.scss'
import foto from '../../Assets/img/esio.jpg'

const about = () =>(
    <div className='about'>
        <Title title='SOBRE'/>
        <div className='about__content'>
            <img src={foto} alt='Esio Freitas'/>
            <p>
            <strong>Apaixonado pela área de desenvolvimento</strong>, procuro todos 
                os dias a aprender e aperfeiçoar minhas habilidades utilizando-se de
                 boas práticas de programação. Além disso, sou 
                entusiasta no desenvolvimento web com experiência em 
                <strong> React</strong>, <strong>Ruby on Rails</strong>, <strong>Flask </strong>
                 e <strong>Sass</strong>. Sou muito familiarizado com trabalho em equipe e procuro 
                 sempre tomar iniciativa nelas. Por fim, meu objetivo profissional é me tornar um 
                <strong> desenvolvedor Full-Stack</strong>.
            </p>
        </div>
    </div>
);

export default about;