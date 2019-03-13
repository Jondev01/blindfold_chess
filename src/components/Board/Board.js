import React from 'react';

import Square from './Square/Square';
import styles from './Board.module.css';
import Backdrop from '../Backdrop/Backdrop';

const board = (props) =>  {
   
    const squares = props.board.map( (el, index) => {
        let color = (Math.floor(index/8) + index%8) %2 === 0 ? 'light' : 'dark';
        return <Square type={color} key={index}  piece={el.name}/>
    });
    const output = props.show ? squares : null;
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closeBackdrop}/>
            <div className={styles.Board+' '+styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {output}
            </div>
        </React.Fragment>
    );
}

export default board;

