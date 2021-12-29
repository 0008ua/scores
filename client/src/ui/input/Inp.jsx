import React from 'react';

import classes from './Inp.module.scss';
const Inp = ({ children, ...props }) => {
    return (
        <input  {...props}
        className={props.className ? classes.inp + ' ' + props.className : classes.inp} />
    )
}

export default Inp;
