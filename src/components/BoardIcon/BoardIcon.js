import React, { Component } from 'react';
import styles from './BoardIcon.module.css';

import Icon from '../../images/board.png';

class BoardIcon extends Component {
    state = {
        showBoard: false
    }

    render() {
        return (
            <div className={styles.BoardIcon}>
                <img src={Icon} onClick={this.props.onClick} alt=""/>
            </div>
        );
    }
}

export default BoardIcon;