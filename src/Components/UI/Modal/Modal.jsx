import React, {Fragment} from 'react'

import BackDrop from '../Backdrop/Backdrop'

import './Modal.scss'

const modal = props => (
    <Fragment>
        <BackDrop show={props.show} click={props.closeModal}/>
        <div className='modal'
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;