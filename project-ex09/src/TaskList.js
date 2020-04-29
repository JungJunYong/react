import React from 'react';
export default class TaskList extends React.Component {
    render() {
        let taskComponents = [];
        this.props.tasks.forEach(task => taskComponents.push(<li className='TaskList_task'>
            <input type='checkbox' defaultChecked={task.done} />
            {task.name}
            <a href='#' className='TaskList__Task--remove'></a>
        </li>
        ));
        console.log(this.props.tasks)
        return (
            <div className='TaskList'>
                <ul>
                    {taskComponents}
                </ul>
            </div>

        )

    }
}