"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Task {
  _id: string
  title: string
  description: string
  deadline: string
  email: string
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching tasks');
      setLoading(false);
    }
  };
  const isToday = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const tasksToday = tasks.filter(task => isToday(task.deadline));

  const handleTaskCompletion = async (taskId: string) => {
    try {
      // Remove the task from the screen
      setTasks(tasks.filter(task => task._id !== taskId));
      
      // Mark the task as completed in the database
      await axios.patch(`http://localhost:5000/api/tasks/${taskId}`, { completed: true });
    } catch (error) {
      console.error('Error marking task as completed:', error);
      // If there's an error, re-add the task to the screen
      // Since we removed the task from the screen earlier, we need to fetch tasks again to get the updated list
      fetchTasks(); // Assuming fetchTasks is a function to refetch tasks from the server
    }
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
      {tasksToday.length === 0 ? (
        <p>No tasks for today.</p>
      ) : (
        tasksToday
  .filter(task => !task.completed) // Filter out completed tasks
  .map((task) => (
    <div key={task._id} className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
      <p className="text-sm text-gray-500">Reminder Email: {task.email}</p>
      <div className="flex space-x-4">
        <button onClick={() => handleTaskCompletion(task._id)} className="flex-1 text-center p-2 bg-green-500 text-white font-bold rounded">
          Complete
        </button>
        <Link href={`/tasks/edit/${task._id}`} className="flex-1 text-center p-2 bg-yellow-500 text-white font-bold rounded">
          Edit
        </Link>
        <Link href={`/tasks/${task._id}`} className="flex-1 text-center p-2 bg-blue-500 text-white font-bold rounded">
          View
        </Link>
      </div>
    </div>
  ))
      )}
    </div>
  );
};

export default TasksPage;
