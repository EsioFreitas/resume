import React from 'react'

import Title from '../UI/Title/Title'
import Educations from '../../helpers/educations'

import './Education.scss'

const education = () =>{
    let educations = Educations
    return(
        <section className='education-page'>
            <Title title="EDUCAÇÃO"/>
            <div className='education'>
            {
                Object.keys(educations).map(key=>(
                    <div key={key} className='education__content'>
                        <h1 className='education__title'>{educations[key].title}</h1>
                            {
                                Object.keys(educations[key].data).map(content =>(
                                    <div className='education__text' key={content}>
                                        <h2>{educations[key].data[content].curso}</h2>
                                        <p>{educations[key].data[content].college}</p>
                                        {
                                            educations[key].data[content].duration ? 
                                            <p>{educations[key].data[content].duration}</p> :
                                            <p>Acesso aos certificados:  <a href={educations[key].data[content].certificado} target="_blank">AQUI</a></p>
                                        }
                                    </div>
                                ))
                            }
                    </div>
                ))
            }
            </div>
        </section>

    )
}


export default education;