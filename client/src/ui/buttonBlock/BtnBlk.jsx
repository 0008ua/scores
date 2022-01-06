import React from 'react';
import classes from './BtnBlk.module.scss';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from '../button/Btn';

const BtnBlk = ({ children, color, plusHandler, minusHandler,
    plusDisabled, minusDisabled, ...props }) => {
    // add main isolated class
    let classStr = classes.btnBlk;
    // if (color) {
    //     // add styling isolated class
    //     classStr = `${classStr} ${classes['btn_' + color]}`
    // }
    // if (customType) {
    //     // add styling isolated class
    //     if (Array.isArray(customType)) {
    //         customType.forEach((type) => {
    //             classStr = `${classStr} ${classes['btn_' + type]}`
    //         })
    //     } else {
    //         classStr = `${classStr} ${classes['btn_' + customType]}`
    //     }
    // }
    if (props.className) {
        // add inherited (passed from outside) class
        classStr = `${classStr} ${props.className}`
    }

    return (
        <div {...props} className={classStr} >
            <Btn color={color} customType="sticky-left"
                disabled={minusDisabled}
                onClick={minusHandler}>
                <FontAwesomeIcon icon={faMinus} />
            </Btn>
            <Btn color={color} customType="sticky">
                {children}
            </Btn>
            <Btn color={color} customType="sticky-right"
                disabled={plusDisabled}
                onClick={plusHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </Btn>
        </div>


    )
}

export default BtnBlk;