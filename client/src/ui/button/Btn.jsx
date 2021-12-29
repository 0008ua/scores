import React from 'react';
import classes from './Btn.module.scss';

const Btn = ({ children, color, customType, ...props }) => {
    // add main isolated class
    let classStr = classes.btn;
    if (color) {
        console.log('color', color)
        // add styling isolated class
        classStr = `${classStr} ${classes['btn_' + color]}`
        console.log('classStr', classStr)

    }
    if (customType) {
        // add styling isolated class
        classStr = `${classStr} ${classes['btn_' + customType]}`
    }
    if (props.className) {
        // add inherited (passed from outside) class
        classStr = `${classStr} ${props.className}`
    }
    return (
        <button {...props}
            className={classStr}>
            {children}
        </button>
    )
}

export default Btn;