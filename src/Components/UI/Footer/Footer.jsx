import React from 'react'

import linkedinImg from '../../../Assets/icons/linkedin.svg'
import githubImg from '../../../Assets/icons/github.svg'

import './Footer.scss'

const footer = () => (
    <footer>
        <p>© 2019 Esio Freitas</p>
        <div className='footer_imgs'>
            <a href='https://github.com/EsioFreitas' target="blank" rel='external'>
                <img src={githubImg} alt='GitHub'/>
            </a>
            <a href='https://www.linkedin.com/in/esiofreitas/' rel='external'>
                <img src={linkedinImg} alt='Linkedin'/>
            </a>
        </div>    
    </footer>
);

export default footer;