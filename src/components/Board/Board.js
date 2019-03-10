import React from 'react';

import Square from './Square/Square';
import styles from './Board.module.css';

const board = (props) =>  {
   
    let squares = props.board.map( (el, index) => {
        let color = (Math.floor(index/8) + index%8) %2 === 0 ? 'light' : 'dark';
        return <Square type={color} key={index}  piece={el.name}/>
    });

    return (
        <div className={styles.Board}>
            {squares}
        </div>
    );
}

export default board;

