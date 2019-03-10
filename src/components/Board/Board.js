import React, { Component } from 'react';

import Square from './Square/Square';
import * as Pieces from '../../util/Pieces';
import styles from './Board.module.css';

class Board extends Component {
   
    /*constructor(props) {
        super(props);
        const initState = this.getInitialPos();
        this.state = {
            board : [...initState.board],
            pieces: {...initState.pieces},
            attackedPieces: [...initState.attackedPieces],
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
        const attacked = getAttackedPieces({board: board, pieces: pieces});
       return {board: board, pieces: pieces, attackedPieces: attacked};
    };

    generateMove = () => {
        let piece, dir;
        [piece,dir] = this.selectPieceAndDir();
        let possibleSteps = 0;
        let curPosition = piece.square;
        while(piece.stepIsLegal(dir, curPosition) && this.state.board[curPosition+dir[0]+8*dir[1]] === 0) {
            possibleSteps++;
            curPosition += dir[0] + 8*dir[1];
            //Knights can only do one step
            if(piece.name === 'N')
                break; 
        }
        let steps = Math.floor(possibleSteps*Math.random())+1;
        let initialPos = piece.square;
        piece.setSquare(initialPos+steps*dir[0]+8*steps*dir[1]);
        //update state
        const pieces = {...this.state.pieces};
        const board = [...this.state.board];
        pieces[piece.name] = piece;
        board[initialPos] = 0;
        board[piece.square] = piece;
        const attacked = this.getAttackedPieces({board: board, pieces: pieces});
        this.setState({board: board, pieces: pieces, attackedPieces: attacked});
    }

    selectPieceAndDir = () => {
        let pieceType = ['R', 'Q', 'N', 'B'][Math.floor(4*Math.random())];
        let piece = Object.assign(this.state.pieces[pieceType]);
        let dir = piece.getDir();
        let count = 0;
        while(this.state.board[piece.square+dir[0]+8*dir[1]] !== 0){
            dir = piece.getDir();
            count ++;
            //try again if no move's found
            if(count >4)
                return this.selectPieceAndDir();
        }
        return [piece, dir];
    }

    attackedPieces = (piece) => {
        //find all the pieces attacked by piece
        return piece.getDirs().reduce( (attackedPieces, dir) => {
            let position = piece.square;
            while( piece.stepIsLegal(dir, position)) {
                position += dir[0] + 8*dir[1];
                //if square is not empty, add it to list
                if(this.state.board[position] !== 0)
                    attackedPieces.push(piece.name);
                //knights only make one step
                if(piece.name === 'N')
                    break;
            }
        }, []);
    }

    getAttackedPieces = (state) => {
        const attacked = {};
        for(let pieceName in state.pieces) {
            attacked[pieceName] = attackedPieces(state.pieces[pieceName]);
        }
        return attacked;
    }*/

    render() {
        console.log(this.props);
        let squares;
        if(this.props.board){
            squares = this.props.board.map( (el, index) => {
            let color = (Math.floor(index/8) + index%8) %2 === 0 ? 'light' : 'dark';
            return <Square type={color} key={index}  piece={el.name}/>
        });
    }
        return (
            <div className={styles.Board}>
                {squares}
            </div>
        );
    }
}

export default Board;

