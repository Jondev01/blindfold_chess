import React from 'react';
import * as Pieces from '../../util/Pieces';
import styles from './StartingPosition.module.css';
import MoveOutput from '../MoveOutput/MoveOutput';

const startingPosition = (props) => {
    const output = Object.keys(props.startPos).map( el => 
        <MoveOutput move={el+Pieces.intToSquare(props.startPos[el])} />
    );

    return (
        <div className={styles.StartingPosition}>
            {output}
        </div>
    );
}

export default startingPosition;