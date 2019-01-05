import React from 'react'

import Title from '../UI/Title/Title';
import Skills from '../../helpers/skills';

import './Skills.scss'

let skill = Skills 
const skills = () =>(
    <section className='skills-page'>
        <Title title="HABILIDADES"/>
        <div className='skills-page__skills'>
        {
            Object.keys(skill).map(key=>(
                <div key={key} className='skills-page__skills__skill'>
                    <h1>{skill[key].title}</h1>
                    <ul>
                    {
                        Object.keys(skill[key].option.sort()).map(option=>(
                            <li key={option}><p>{skill[key].option[option]}</p></li>
                        ))
                    }
                    </ul>
                </div>
            ))
        }
        </div>
    </section>
);

export default skills;