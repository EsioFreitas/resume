import React from 'react'
import Scrollchor from 'react-scrollchor';

import './Navbar.scss'


const navbar = () =>(
    <nav>
        <ul>
            <li><Scrollchor to='about-page' id='about'>SOBRE</Scrollchor></li>
            <li><Scrollchor to='projects-page' id='project'>PROJETOS</Scrollchor></li>
            <li><Scrollchor to='skills-page' id='skills'>HABILIDADES</Scrollchor></li>
            <li><Scrollchor to='education-page' id='education'>EDUCAÇÃO</Scrollchor></li>
            <li><Scrollchor to='experience-page' id='experience'>EXPERIÊNCIA</Scrollchor></li>
        </ul>
    </nav>
);

export default navbar;