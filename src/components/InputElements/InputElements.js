import React, {Component} from 'react';

import InputElement from './InputElement/InputElement';

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
        }
    };

    clickPieceHandler = (piece, selectedPiece) => {
        this.setState( prevState => {
            const newConfig = Object.keys(this.props.attackedPieces).reduce( (acc,el) => {
                if(el === selectedPiece)
                    acc[el] = !prevState.selected[piece][el];
                else acc[el] = prevState.selected[piece][el];
                    return acc;
            },{});
            console.log(newConfig);
            return {
                selected: {
                    ...prevState.selected,
                    [piece]: newConfig,
            }}});
    }

    render() {
        const output = Object
            .keys(this.props.attackedPieces)
            .map(key => (<InputElement
                piece={key}
                attackedPieces={this.props.attackedPieces[key]}
                selected={this.state.selected[key]}
                onClick={this.clickPieceHandler}
                key={key}/>));

        return (
            <div>
                {output}
                <button>Check your answers!</button>
            </div>
        );
    }
};

export default InputElements;