import React from 'react'

import './Backdrop.scss'

const backdrop = props => (
    props.show ? <div className='backDrop' onClick={props.click}></div> : null
);

export default backdrop;
