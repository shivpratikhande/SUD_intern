/* import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    const response = await axios.get(`/api/tasks/${id}`);
    setTask(response.data);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${id}`);
    router.push('/');
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="mb-4">{task.description}</p>
      <p className="mb-4 text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
      <p className="mb-4 text-sm text-gray-500">Reminder Email: {task.email}</p>
      <div className="flex space-x-4">
        <Link href={`/tasks/edit/${task._id}`}>
          <a className="flex-1 text-center p-2 bg-yellow-500 text-white font-bold rounded">Edit</a>
        </Link>
        <button onClick={handleDelete} className="flex-1 p-2 bg-red-500 text-white font-bold rounded">Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
 */