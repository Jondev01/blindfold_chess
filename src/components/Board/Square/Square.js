import React from 'react';
import styles from './Square.module.css';
import Rook from '../../../images/WR.png';
import Knight from '../../../images/WN.png';
import Queen from '../../../images/WQ.png';
import Bishop from '../../../images/WB.png';

const square = (props) => {

    const pieceImage = {
        R: Rook,
        N: Knight,
        B: Bishop,
        Q: Queen
    };
    const classes = [styles.Square];
    if (props.type === 'dark') 
        classes.push(styles.Dark);
    else if (props.type === 'light') 
        classes.push(styles.Light);
    return (
        <div className={classes.join(' ')}>
            {props.piece ? <img src={pieceImage[props.piece]} alt=''/>  :  ''}
        </div>
    );
};

export default square;