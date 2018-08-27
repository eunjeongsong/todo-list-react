import React, { Component } from 'react';
import styles from './Form.css';

class Form extends Component {
    render() {
        const { value, onChange, onCreate, onKeyPress } = this.props;
        
        return (
            <div className = {styles.form}>
                <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
                <div className={styles.createButton} onClick={onCreate}>
                    추가
                </div>
            </div>
        );
    };
}

export default Form;