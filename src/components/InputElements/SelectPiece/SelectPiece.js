import React from 'react';
import styles from './SelectPiece.module.css';

const selectPiece = (props) => {
    let classes = [styles.SelectPiece];
   if(props.validate){
        if(props.correct === true)
            classes.push(styles.Correct);
        else if(props.correct === false)
            classes.push(styles.Wrong);
   }
    classes = classes.join(' ');
    return (
        <div className={classes}>
            {props.selected ? <div className={styles.tick}></div> : null }
            <img src={props.pieceURL} alt='' onClick={ () => props.onClick(props.piece)}/>
        </div>
    );
}

export default selectPiece;