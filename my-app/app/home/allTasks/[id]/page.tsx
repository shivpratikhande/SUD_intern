"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';



function page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params
  const [task, setTask] = useState(null);

  console.log(id)
  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
    console.log(response)

    setTask(response.data);

  };
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    router.push('/home');
  };

  if (!task) return <p>Loading...</p>;



  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">

      <h1 className="text-2xl font-bold mb-4">
        {
          //@ts-ignore
          task.title
        }
      </h1>
      <p className="mb-4">
        {          //@ts-ignore

          task.description}
      </p>
      <p className="mb-4 text-sm text-gray-500">Deadline:
        {
          //@ts-ignore
          new Date(task.deadline).toLocaleString()}</p>
      <p className="mb-4 text-sm text-gray-500">Reminder Email:
        {
          //@ts-ignore
          task.email}</p>
      <div className="flex space-x-4">
        <Link 
        href={`/tasks/edit/${//@ts-ignore
          task._id}`}
          className="flex-1 text-center p-2 bg-yellow-500 text-white font-bold rounded">
          Edit
        </Link>
        <button onClick={handleDelete} className="flex-1 p-2 bg-red-500 text-white font-bold rounded">Delete</button>
      </div>
    </div>
  )
}

export default page