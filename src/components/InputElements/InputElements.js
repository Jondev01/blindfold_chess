import React, {Component} from 'react';

import InputElement from './InputElement/InputElement';

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
                <button onClick={this.props.generateMoveHandler}>Move</button>
                <button onClick={this.removeSelectHandler}>Restart</button>
                {output}
                <button onClick={this.validate}>Check your answers!</button>
            </div>
        );
    }
};

export default InputElements;