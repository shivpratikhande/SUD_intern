import React from 'react';

//@ts-ignore
const TaskDetails = ({ task }) => {
    return (
        <div>
            <h2>Task Details</h2>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Deadline: {task.deadline}</p>
        </div>
    );
}

export default TaskDetails;
