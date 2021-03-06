import React from 'react'

import styles from './Button.module.css';

function Button(props) {
    return (
        <button className={styles.Btn} {...props.config} >{props.name}</button>
    )
}

export default Button;
