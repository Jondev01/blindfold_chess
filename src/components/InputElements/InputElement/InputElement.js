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

    render() {
    const pieceImage = {
        R: Rook,
        N: Knight,
        B: Bishop,
        Q: Queen
    };
    let pieces = ['Q', 'R', 'B', 'N']
        .filter( el => el !==this.props.piece)
        .map( el => <img src={pieceImage[el]} key={el} alt='' />
    );

    const clickPieceHandler = (piece) => {
        this.setState( prevState => {
            return {
                selected: {
                    ...prevState.selected,
                    [piece]: !prevState.selected[piece]
            }}});
    };

    return (
        <div className={styles.InputElement}>
            <img src={pieceImage[this.props.piece]} alt=''/> {pieces}
            <SelectPiece piece={this.props.piece} pieceURL={pieceImage[this.props.piece]} selected={this.state.selected[this.props.piece]} onClick={clickPieceHandler}/>
        </div>
    );
    }
}

export default InputElement;