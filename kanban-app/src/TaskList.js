import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.css';
export default class TaskList extends React.Component {
    onInputKeyPress(event) {
        if (event.key == 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, event.target.value);
            event.target.value='';
        }else{
            // this.props.taskCallbacks.delete(this.props.cardId, event.target.value);
        }

    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => <li
                        key={task.id} className={styles.Task}>
                        <input type='checkbox' defaultChecked={task.done} />
                        {task.name}
                        <a href='#' className={styles['Task--remove']} onClick={this.onInputKeyPress.bind(this)}></a>
                    </li>)}
                </ul>
                <input type='text' className={styles['input--add-task']} placeholder='새테스크' onKeyPress={this.onInputKeyPress.bind(this)} />
            </div>

        )

    }
}
TaskList.proTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}