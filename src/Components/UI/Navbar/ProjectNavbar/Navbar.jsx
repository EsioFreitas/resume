import React from 'react';
import {NavLink} from 'react-router-dom'

import './Navbar.scss';

const navbar = props =>(
    <ul className='project-navbar'>
        <li>
            <NavLink to='/' exact>
                <i class="material-icons">
                    chevron_left
                </i>
            </NavLink>
        </li>
    </ul>
)

export default navbar;