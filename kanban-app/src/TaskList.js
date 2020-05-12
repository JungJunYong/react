import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.css';
export default class TaskList extends React.Component {
    taskAdd(e) {
        if (e.key == 'Enter') {
            console.log('enter');
            console.log(this.props.tasks)
            this.props.push = {
                id: 4,
                name: 'abdc',
                done: false
            }
            //     this.taskComponents.push(<li className='TaskList_task'>
            //     <input type='checkbox' defaultChecked={task.done} />
            //     e.target.value
            //     <a href='#' className='TaskList__Task--remove'></a>
            // </li>)
            //     console.log(e.target.value);
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
                        <a href='#' className={styles['Task--remove']}></a>
                    </li>)}
                </ul>
                <input type='text' className={styles['input--add-task']} placeholder='새테스크' onKeyDown={this.taskAdd.bind(this)} />
            </div>

        )

    }
}
TaskList.proTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}