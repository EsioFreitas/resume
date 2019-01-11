import React from 'react';

import Title from '../UI/Title/Title';
import Experiences from '../../helpers/experiences';

import './Experience.scss'

let experiences = Experiences
const experience = () =>(
    <section className='experiences-page' id='experience-page'>
        <Title title="EXPERIÊNCIA"/>
        <div className='experiences'>
            {
                Object.keys(experiences).map(key=>(
                    <div key={key} className='experiences__experience'>
                        <h1 className='experiences__experience__title'>{experiences[key].jobTitle}</h1>
                        <h2 className='experiences__experience__company'>{experiences[key].company}</h2>
                        <p className='experiences__experience__duration'>{experiences[key].duration}</p>
                        <p className='experiences__experience__description'>{experiences[key].description}</p>
                    </div>
                ))
            }
        </div>
    </section>
);

export default experience;