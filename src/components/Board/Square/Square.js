import React from 'react';
import styles from './Square.module.css';

const square = (props) => {
    const classes = [classes.Square];
    if(props.type === 'dark')
        classes.push(styles.Dark);
    else if(props.type === 'light')
        classes.push(styles.Light);
    return (
        <div className={classes.join(' ')}>
        </div>
    );
};

export default square;