"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Block from '@/components/Block';


//@ts-ignore
const TaskForm = ({ task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [deadline, setDeadline] = useState(task ? new Date(task.deadline).toISOString().slice(0, 16) : '');
  const [email, setEmail] = useState(task ? task.email : '');
  const router = useRouter();
//@ts-ignore

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title: title,
      description: description,
      deadline: deadline,
      email: email
    };
    console.log("submit")
    try {
      if (task && task._id) { 
        await axios.put(`http://localhost:5000/api/tasks/${task._id}`, data);
      } else {
        await axios.post('http://localhost:5000/api/tasks', data);
      }
      router.push('/home');
    } catch (error) {
      console.error('Error saving task:', error);
    }
    console.log("another submit");
  }
  return (

    <Block className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">

<form onSubmit={handleSubmit} >
      <h1 className="text-2xl font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="title"># Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=' p-3 rounded-xl w-full  px-4 border-zinc-500 border-2'
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="description"># Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=' p-3 rounded-xl w-full  px-4 border-zinc-500 border-2'
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="deadline"># Deadline</label>
        <input
          type="datetime-local"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className=' p-3 rounded-xl w-full  px-4 border-zinc-500 border-2'
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="email"># Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=' p-3 rounded-xl w-full  px-4 border-zinc-500 border-2'
          required
        />
      </div >
      <Button type="submit" className="w-full p-5 my-5 text-white font-bold rounded-xl "> Save Task</Button>
    </form>
   

    </Block>

  );
};

export default TaskForm;
