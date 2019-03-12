import React from 'react';

import styles from './InputElement.module.css';
import Rook from '../../../images/WR.png';
import Knight from '../../../images/WN.png';
import Queen from '../../../images/WQ.png';
import Bishop from '../../../images/WB.png';
import SelectPiece from '../SelectPiece/SelectPiece';



const inputElement = (props) => {

        const pieceImage = {
            R: Rook,
            N: Knight,
            B: Bishop,
            Q: Queen
        };
        const pieces = ['Q', 'R', 'B', 'N']
            .filter( el => el !== props.piece)
            .map( el => <SelectPiece
                piece={el} 
                pieceURL={pieceImage[el]}
                selected={props.selected[el]}
                validate={props.validate}
                correct={props.attackedPieces.includes(el) === props.selected[el]}
                onClick={ (selectedPiece) => props.onClick(props.piece, selectedPiece)}
                key={el} alt='' />
            );

        return (
            <div>
                <div className={styles.InputElement}>
                    <img src={pieceImage[props.piece]} alt=''/> {pieces}
                </div>
            </div>
        );
    }

export default inputElement;