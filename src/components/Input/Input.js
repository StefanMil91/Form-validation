import React from 'react'

import styles from "./Input.module.css"

function Input(props) {

    let output = null;
    let errClasses = [styles.Error_msg].join(' ');
    if (!props.valid && props.touched) {
        errClasses = [styles.Error_msg, styles.Error_msg_show].join(' ');
    }


    if (props.elementType === 'input') {
        output =
            <div className="form-group">
                <label htmlFor={props.config.name} className={styles.Label} >{props.config.name}</label>
                <input  onChange={props.inputHendler} className="form-control" {...props.config} value={props.value} />
                <p className={errClasses} >{props.validError}</p>
            </div>
    } else if (props.elementType === 'textarea') {
        output =
            <div className="form-group">
                <label htmlFor={props.config.name} className={styles.Label} >{props.config.name}</label>
                <textarea onChange={props.inputHendler} className="form-control" {...props.config} value={props.value}></textarea>
            </div>
    }

    //console.log(output);


    return (
        <div>
            {output}
        </div>

    )
}

export default Input
