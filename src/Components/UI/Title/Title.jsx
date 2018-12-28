import React from 'react'

import './Title.scss'

const title = props => {
    return(
        <div className='title'>
            <div></div>
            <h1>{props.title}</h1>
            <div></div>
        </div>
    );
}

export default title;