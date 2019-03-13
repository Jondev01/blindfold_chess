import React from 'react';

import styles from './MoveOutput.module.css';
import Rook from '../../images/WR.png';
import Knight from '../../images/WN.png';
import Queen from '../../images/WQ.png';
import Bishop from '../../images/WB.png';

const pieceImage = {
    R: Rook,
    N: Knight,
    B: Bishop,
    Q: Queen
};

const moveOutput = (props) => (
    <div className={styles.MoveOutput}>
    <strong>{props.moveNumber?props.moveNumber+'. ' : null}</strong>
        <img src={pieceImage[props.move[0]]} />
        <div><strong>{props.move.substring(1)}</strong></div>
    </div>
);

export default moveOutput;