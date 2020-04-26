import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import styles from "./Input.module.css"

function Input(props) {

    let output = null;
    let errClasses = [styles.Error_msg].join(' ');
    if (!props.valid && props.touched) {
        errClasses = [styles.Error_msg, styles.Error_msg_show].join(' ');
    }


    if (props.elementType === 'input') {
        output =
            <>
                <label htmlFor={props.config.name} className={styles.Label} >{props.config.name}</label>
                <input onChange={props.inputHendler} className="form-control" {...props.config} value={props.value} />
                <p className={errClasses} >{props.validError}</p>
            </>
    } else if (props.elementType === 'textarea') {
        output =
            <>
                <label htmlFor={props.config.name} className={styles.Label} >{props.config.name}</label>
                <TextareaAutosize {...props.config} className="form-control" />
            </>
    }

    //console.log(output);


    return (
        <div className="form-group" >
            {output}
        </div>

    )
}

export default Input
