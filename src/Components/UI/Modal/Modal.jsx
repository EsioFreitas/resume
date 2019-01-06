import React, {Fragment} from 'react'

import './Modal.scss'

const modal = props => (
    <Fragment>
        <div className='modal'
             style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
             }}>
            {props.children}
        </div>
    </Fragment>
);