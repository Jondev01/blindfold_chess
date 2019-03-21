import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => {
    return (
        props.show ? 
            <div className={styles.Modal}>
                {props.children}
            </div> : null
    );
};

export default modal;