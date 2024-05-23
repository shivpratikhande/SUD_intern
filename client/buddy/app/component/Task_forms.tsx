import React, { useState } from 'react';

//@ts-ignore

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    //@ts-ignore

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, deadline });
        setTitle('');
        setDescription('');
        setDeadline('');
    }

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;
