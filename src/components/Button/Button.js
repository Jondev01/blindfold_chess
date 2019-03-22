import React from 'react';
import styles from './Button.module.css';

const button = (props) => (
    <button id={props.id} className={styles.Button} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
    </button>
);

export default button;