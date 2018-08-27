import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.css';

const cn = classNames.bind(styles);

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className={styles.todoItem} onClick={() => onToggle(id)}>
                <div className={styles.remove} onClick={(e) => {e.stopPropagation(); onRemove(id)}}>&times;</div>
                <div className={cn(styles.todoText, checked && 'checked')}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className={styles.checkMark}></div>)
                }
            </div>
        );
    };
}

export default TodoItem;