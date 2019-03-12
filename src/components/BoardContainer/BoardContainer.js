import React, { Component } from 'react';
import styles from './BoardContainer.module.css';
import Board from '../Board/Board';
import InputElements from '../InputElements/InputElements';
import MoveOutput from '../MoveOutput/MoveOutput';
import * as Pieces from '../../util/Pieces';

class BoardContainer extends Component {

    constructor(props) {
        super(props);
        const initState = this.getInitialState();
        this.state = {
            ...initState,
        }
    }
    
    getInitialState = () => {
        //initialize positions
        let rPos = Math.floor(64*Math.random());
        let bPos = Math.floor(64*Math.random());
        while(bPos === rPos)
            bPos = Math.floor(64*Math.random());
        let qPos = Math.floor(64*Math.random());
        while(qPos === bPos || qPos === rPos)
            qPos = Math.floor(64*Math.random());
        let nPos = Math.floor(64*Math.random());
        while(nPos === bPos || nPos === rPos || nPos === qPos)
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
        const attacked = this.getAttackedPieces({board: board, pieces: pieces});
       return {board: board, pieces: pieces, attackedPieces: attacked, counter: 0, move: '', showValidation: false, points: 0};
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
        const counter = this.state.counter+1;
        const move = piece.name + Pieces.intToSquare(piece.square);
        this.setState({board: board, pieces: pieces, attackedPieces: attacked, counter: counter, move: move, showValidation: false});
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

    attackedPieces = (piece, board) => {
        if(!board)
            board = this.state.board;
        //find all the pieces attacked by piece
        return piece.getDirs().reduce( (attacked, dir) => {
            let position = piece.square;
            
            while( piece.stepIsLegal(dir, position)) {
                position += dir[0] + 8*dir[1];
                //if square is not empty, add it to list and move on to next dir
                if(board[position] !== 0){
                    attacked.push(board[position].name);
                    break;
                }
                //knights only make one step
                if(piece.name === 'N')
                    break;
            }
            return attacked;
        }, []);
    }

    getAttackedPieces = (state) => {
        const attacked = {};
        for(let pieceName in state.pieces) {
            attacked[pieceName] = this.attackedPieces(state.pieces[pieceName], state.board);
        }
        return attacked;
    }

    restartHandler = () => {
        this.setState({...this.getInitialState()});
    }

    updatePointsHandler = (correctPiecesSelected) => {
        this.setState(prevState => {
            const newPoints = correctPiecesSelected ? prevState.points+1 : 0;
            return {
                ...prevState,
                points: newPoints,
                showValidation: true,
            }
        });
    }

    render() {
        return (
            <div className={styles.BoardContainer}>
                {this.state.counter}
                <MoveOutput move={this.state.move} />
                {this.state.move}
                {this.state.points}
                <Board board={this.state.board} pieces={this.state.pieces}/>
                <div>
                    Queen attacks: {this.state.attackedPieces['Q']} <br />
                    Rook attacks: {this.state.attackedPieces['R']} <br />
                    Bishop attacks: {this.state.attackedPieces['B']} <br />
                    Knight attacks: {this.state.attackedPieces['N']}
                </div>
                <InputElements 
                    attackedPieces={this.state.attackedPieces} 
                    validate={this.state.showValidation} 
                    updatePointsHandler={this.updatePointsHandler}
                    restartHandler={this.restartHandler}
                    generateMoveHandler={this.generateMove}/>
            </div>
        );
    }
}

export default BoardContainer;