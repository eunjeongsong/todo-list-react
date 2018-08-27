import React, { Component } from 'react';
import styles from './TodoListTemplate.css';

class TodoListTemplate extends Component {
    render() {
        const { form, children } = this.props;
        return (
            <main className={styles.todoListTemplate}>
                <div className={styles.title}>
                    오늘 할 일
                </div>
                <section className={styles.formWrapper}>
                    {form}
                </section>
                <section className={styles.todosWrapper}>
                    {children}
                </section>
            </main>
        );
    };
}

export default TodoListTemplate;