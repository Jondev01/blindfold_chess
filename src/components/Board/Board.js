import React, { Component } from 'react';

import Square from './Square/Square';
import * as Pieces from '../../util/Pieces';
import styles from './Board.module.css';

class Board extends Component {
   
    constructor(props) {
        super(props);
        const initState = this.getInitialPos();
        this.state = {
            board : [...initState.board],
            pieces: {...initState.pieces}
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
        //other logic uses that an empty square is 0!
        const board = Array(64).fill(0);
        board[rPos] = new Pieces.Rook(rPos);
        board[bPos] = new Pieces.Bishop(bPos);
        board[qPos] = new Pieces.Queen(qPos);
        board[nPos] = new Pieces.Knight(nPos);
        const pieces = {
            R: board[rPos],
            N: board[nPos],
            Q: board[qPos],
            B: board[bPos]
        };
       return {board: board, pieces: pieces};
    };

    generateMove = () => {
        console.log('[generateMove initialState]', this.state.board);
        let piece, dir;
        [piece,dir] = this.selectPieceAndDir();
        console.log('[generateMove] piece,dir');
        console.log(piece,dir);
        let possibleSteps = 0;
        let curPosition = piece.square;
        while(piece.stepIsLegal(dir, curPosition)) {
            possibleSteps++;
            curPosition += dir[0] + 8*dir[1];
            console.log('[while generate Move] curPosition', curPosition);
            //Knights can only do one step
            if(piece.name === 'N')
                break; 
        }
        console.log('[possibleSteps]', possibleSteps);
        let steps = possibleSteps*Math.floor(Math.random())+1;
        let initialPos = piece.square;
        console.log('[steps, initialPos]', steps, initialPos);
        piece.setSquare(initialPos+steps*dir[0]+8*steps*dir[1]);
        let pieces = {...this.state.pieces};
        let board = [...this.state.board];
        pieces[piece.name] = piece;
        board[initialPos] = 0;
        board[piece.square] = piece;
        this.setState({board: board, pieces: pieces});
    }

    selectPieceAndDir = () => {
        let pieceType = ['R', 'Q', 'N', 'B'][Math.floor(4*Math.random())];
        console.log('pieceType', pieceType);
        let piece = Object.assign(this.state.pieces[pieceType]);
        console.log('[selectPieceAndDir] piece, square, dir] 1st', piece, piece.square, dir);
        let dir = piece.getDir();
        let count = 0;
        console.log('[selectPieceAndDir] piece, square, dir] 2nd', piece, piece.square, dir);
        while(this.state.board[piece.square+dir[0]+8*dir[1]] !== 0){
            dir = piece.getDir();
            count ++;
            //try again if no move's found
            if(count >4)
                return this.selectPieceAndDir();
        }
        return [piece, dir];
    }


    render() {
        console.log('[render] state', this.state);
        let squares = this.state.board.map( (el, index) => {
            let color = (Math.floor(index/8) + index%8) %2 === 0 ? 'light' : 'dark';
            return <Square type={color} key={index}  piece={el.name}/>
        });

        return (
            <React.Fragment>
                <button onClick={this.generateMove}>Move</button>
            <div className={styles.Board}>
                {squares}
            </div>
            </React.Fragment>
        );
    }
}

export default Board;

