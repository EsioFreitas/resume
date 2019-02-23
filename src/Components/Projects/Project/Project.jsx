import React from 'react'

import githubIcon from '../../../Assets/icons/github-logo.svg'

// import Carousel from 'nuka-carousel'

import './Project.scss'

const project = props =>{
    let data = {
        title: 'Nuntium',
        subtitle: 'Ruby on Rails',
        whats:'Rede social de blogers',
        technologies: ['Ruby on Rails', 'Bootstrap'],
        description: 'Nuntium é uma rede social de bloggers. No site o usuário pode ver diversos artigos por tags ou produzir seus próprios artigos.',
        repository: 'https://github.com/EsioFreitas/Nuntium',
      }
    return(
        <div className='project'>
            <div className='project__img'>
                {/* <Carousel>
                    {
                        Object.keys(data.carousel).map(key=>(
                            <img src={data.carousel[key]} alt='a' key={key}>
                            
                            {console.log(key)}
                            </img>
                            ))
                    }
                </Carousel> */}
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