import React from 'react';

import classes from './Sel.module.scss';
const Sel = ({ children, ...props }) => {
    return (
        <select
            {...props}
            className={props.className ?
                classes.sel + ' ' + props.className
                : classes.sel}>
            {children}
        </select>
    )
}

export default Sel;
