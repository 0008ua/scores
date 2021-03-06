import React from 'react';
import classes from './Btn.module.scss';

const Btn = ({ children, color, customType, ...props }) => {
    // add main isolated class
    let classStr = classes.btn;
    if (color) {
        // add styling isolated class
        classStr = `${classStr} ${classes['btn_' + color]}`
    }
    if (customType) {
        // add styling isolated class
        if (Array.isArray(customType)) {
            customType.forEach((type) => {
                classStr = `${classStr} ${classes['btn_' + type]}`
            })
        } else {
            classStr = `${classStr} ${classes['btn_' + customType]}`
        }
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