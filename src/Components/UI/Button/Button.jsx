import React from 'react';

import './Button.scss';


const button = props =>{
    let classButton = ['button']
    if(props.classbutton === 'invitation')
        classButton.push('button__invitation')
    else if(props.classbutton === 'cards')
        classButton.push('button__cards')
    return(
        <div className={classButton.join(' ')}
             onClick={props.click}>
            {props.children}
        </div>
    );
}

export default button;