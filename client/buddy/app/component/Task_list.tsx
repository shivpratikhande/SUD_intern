import React from 'react';
/* import TaskService from '../services/TaskService';
 */
const TaskList = () => {
/*     const tasks = TaskService.getAllTasks(); // You need to implement this method
 */
    return (
        <div>
            <h2>All Tasks</h2>
            <ul>

                {
                    //@ts-ignore
                    tasks.map(task => (
                        <li key={task.id}>{task.title} - {task.deadline}</li>
                    ))}
            </ul>
        </div>
    );
}

export default TaskList;
