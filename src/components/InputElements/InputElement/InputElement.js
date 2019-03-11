import React, { Component } from 'react';

import styles from './InputElement.module.css';
import Rook from '../../../images/WR.png';
import Knight from '../../../images/WN.png';
import Queen from '../../../images/WQ.png';
import Bishop from '../../../images/WB.png';
import SelectPiece from '../SelectPiece/SelectPiece';



class InputElement extends Component {

    state = {
        selected: {
            R: false,
            N: false,
            B: false,
            Q: false,
        }
    };

    clickPieceHandler = (piece) => {
        this.setState( prevState => {
            return {
                selected: {
                    ...prevState.selected,
                    [piece]: !prevState.selected[piece]
            }}});
    }

    render() {
        const pieceImage = {
            R: Rook,
            N: Knight,
            B: Bishop,
            Q: Queen
        };
        const pieces = ['Q', 'R', 'B', 'N']
            .filter( el => el !==this.props.piece)
            .map( el => <SelectPiece
                piece={el} 
                pieceURL={pieceImage[el]}
                selected={this.state.selected[el]}
                onClick={this.clickPieceHandler}
                key={el} alt='' />
            );

        return (
            <div>
                <div className={styles.InputElement}>
                    <img src={pieceImage[this.props.piece]} alt=''/> {pieces}
                </div>
            </div>
        );
    }
}

export default InputElement;