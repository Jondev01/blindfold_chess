import React, { Component } from 'react';

import Square from './Square/Square';
import * as Pieces from '../../util/Pieces';
import styles from './Board.module.css';

class Board extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            board : [...this.getInitialPos()],
        }
    }
    
    getInitialPos = () => {
        //initialize positions
        let rPos = Math.floor(64*Math.random());
        let bPos = Math.floor(64*Math.random());
        while(bPos === rPos)
            bPos = Math.floor(64*Math.random());
        let qPos = Math.floor(64*Math.random());
        while(qPos === bPos || qPos === rPos)
            qPos = Math.floor(64*Math.random());
        let nPos = Math.floor(64*Math.random());
        while(nPos === bPos || nPos === rPos || bPos === qPos)
            nPos = Math.floor(64*Math.random());
        //create board
        const board = Array(64).fill(0);
        board[rPos] = new Pieces.Rook(rPos);
        board[bPos] = new Pieces.Bishop(bPos);
        board[qPos] = new Pieces.Queen(qPos);
        board[nPos] = new Pieces.Knight(nPos);
       return board;
    }


    render() {
        let squares = this.state.board.map( (el, index) => {
            let color = (Math.floor(index/8)+index%8) %2 === 0 ? 'light' : 'dark';
            return <Square type={color} key={index}  piece={el.name}/>
        });
        //let squares = <Square type="dark"/>;
        return (
            <div className={styles.Board}>
                {squares}
            </div>
        );
    }
}

export default Board;

