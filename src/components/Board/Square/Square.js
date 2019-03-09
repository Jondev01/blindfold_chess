import React from 'react';
import styles from './Square.module.css';

const square = (props) => {
    const classes = [styles.Square];
    if (props.type === 'dark') 
        classes.push(styles.Dark);
    else if (props.type === 'light') 
        classes.push(styles.Light);
    return (
        <div className={classes.join(' ')}>
            {props.piece ? props.piece: 'a'}
        </div>
    );
};

export default square;