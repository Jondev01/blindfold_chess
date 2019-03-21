import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => {
    return (
            <div className={styles.Modal}
                style={{
                    transform: props.show ? 'translate(-50%,-50%)' : 'translate(-50%,-150vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
    );
};

export default modal;