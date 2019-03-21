import React, {Component} from 'react';

import InputElement from './InputElement/InputElement';
import Button from '../Button/Button';
import BoardIcon from '../BoardIcon/BoardIcon';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

const initState = {
    R: {
        R: false,
        N: false,
        B: false,
        Q: false
    },
    N: {
        R: false,
        N: false,
        B: false,
        Q: false
    },
    B: {
        R: false,
        N: false,
        B: false,
        Q: false
    },
    Q: {
        R: false,
        N: false,
        B: false,
        Q: false
    }};

class InputElements extends Component {

    state = {
        selected: {
            R: {
                R: false,
                N: false,
                B: false,
                Q: false
            },
            N: {
                R: false,
                N: false,
                B: false,
                Q: false
            },
            B: {
                R: false,
                N: false,
                B: false,
                Q: false
            },
            Q: {
                R: false,
                N: false,
                B: false,
                Q: false
            }
        },
        showHelp: false
    };

    clickPieceHandler = (piece, selectedPiece) => {
        this.setState( prevState => {
            const newConfig = Object.keys(this.props.attackedPieces).reduce( (acc,el) => {
                if(el === selectedPiece)
                    acc[el] = !prevState.selected[piece][el];
                else acc[el] = prevState.selected[piece][el];
                    return acc;
            },{});
            return {
                selected: {
                    ...prevState.selected,
                    [piece]: newConfig,
            }}});
    }

    validate = () => {
        //can probably be optimized
        let correct = true;
        for(let key in this.state.selected){
            const attacked = Object.keys(this.state.selected).reduce( (acc,el) => {
                acc[el] = this.props.attackedPieces[key].includes(el);
                return acc;
            }, {});
            for(let piece in this.state.selected[key]){
                if(this.state.selected[key][piece] !== attacked[piece]){
                    correct = false;
                }
            }
        }
        this.props.updatePointsHandler(correct);
    }

    removeSelectHandler = () => {
        this.setState({selected: {...initState}});
        this.props.restartHandler();
    }

    showHelpHandler = () => {
        this.setState({showHelp: true});
    }
    closeHelpHandler = () => {
        this.setState({showHelp: false});
    }

    render() {
        const output = Object
            .keys(this.props.attackedPieces)
            .map(key => (<InputElement
                piece={key}
                attackedPieces={this.props.attackedPieces[key]}
                selected={this.state.selected[key]}
                onClick={this.clickPieceHandler}
                validate={this.props.validate}
                key={key}/>));

        return (
            <div>
                <Button onClick={this.props.generateMoveHandler} disabled={!this.props.moveAllowed}>Move</Button>
                <Button onClick={this.removeSelectHandler}>Restart</Button>
                <Button onClick={this.showHelpHandler}>?</Button>
                <BoardIcon onClick={this.props.toggleBoardHandler}/>
                <Modal show={this.state.showHelp}>
                    <p>You are given the starting position of different pieces. Your goal is to mentally decide which are attacked.
                    In each row below, the left-most piece is the attacking piece. Select the pieces in the same row, which this piece is attacking, then click "check your answers".
                    If your answers were correct, you may click "move" and a random legal move is generated. Repeat the process as often as you can.
                    If you lose track you can click the board icon to see the current position. When you view the board, you will need to restart though.
                    </p>
                </Modal>
                <Backdrop show={this.state.showHelp} clicked={this.closeHelpHandler} />
                {output}
                <Button onClick={this.validate} disabled={!this.props.checkAllowed}>Check your answers</Button>
            </div>
        );
    }
};

export default InputElements;