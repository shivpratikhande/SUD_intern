"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

//@ts-ignore
const TaskForm = ({ task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [deadline, setDeadline] = useState(task ? new Date(task.deadline).toISOString().slice(0, 16) : '');
  const [email, setEmail] = useState(task ? task.email : '');
  const router = useRouter();
//@ts-ignore

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description, deadline, email };

    if (task) {
      await axios.put(`/api/tasks/${task._id}`, data);
    } else {
      await axios.post('/api/tasks', data);
    }

    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="deadline">Deadline</label>
        <input
          type="datetime-local"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded">Save Task</button>
    </form>
  );
};

export default TaskForm;
