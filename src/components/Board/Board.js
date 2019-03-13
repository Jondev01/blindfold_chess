import React from 'react';

import Square from './Square/Square';
import styles from './Board.module.css';

const board = (props) =>  {
   
    const squares = props.board.map( (el, index) => {
        let color = (Math.floor(index/8) + index%8) %2 === 0 ? 'light' : 'dark';
        return <Square type={color} key={index}  piece={el.name}/>
    });
    const output = props.show ? squares : null;
    return (
        <div className={styles.Board}>
            {output}
        </div>
    );
}

export default board;

