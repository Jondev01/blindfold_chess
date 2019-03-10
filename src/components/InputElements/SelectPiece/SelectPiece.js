import React from 'react';
import styles from './SelectPiece.module.css';

const selectPiece = (props) => {
    return (
        <div className={styles.SelectPiece}>
            {props.selected ? <div className={styles.tick}></div> : null }
            <img src={props.pieceURL} alt='' onClick={ () => props.onClick(props.piece)}/>
        </div>
    );
}

export default selectPiece;