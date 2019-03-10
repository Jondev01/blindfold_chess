import React from 'react';

import InputElement from './InputElement/InputElement';

const inputElements = (props) => {
    const output = Object.keys(props.attackedPieces).map( key => (
        <InputElement 
            piece={key} 
            attackedPieces={props.attackedPieces[key]} 
            key={key} />
    ));

    return (
        <div>
            {output}
        </div>
    );
};

export default inputElements;