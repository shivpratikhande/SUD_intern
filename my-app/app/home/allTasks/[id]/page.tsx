"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { PencilIcon } from '@heroicons/react/16/solid';
import { Button } from '@/components/ui/button';



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
    router.push('/home/allTasks');
    alert("task deleted successfully")
  };

  if (!task) return <p>Loading...</p>;



  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">

      <h1 className="text-3xl font-bold mb-4">
        {
          //@ts-ignore
          task.title
        }
      </h1>
      <p className="mb-4 font-semibold  text-lg">
        {          //@ts-ignore

          task.description}
      </p>
      <p className="text-sm flex gap-1">Deadline:
        <p className='mb-4 text-sm text-gray-500'>
          {
            //@ts-ignore
            new Date(task.deadline).toLocaleString()}
        </p>
      </p>
      <p className="text-sm flex gap-1">Reminder Email:
        <p className='mb-4 text-sm text-gray-500'>
          {
            //@ts-ignore
            task.email}
        </p>
      </p>

      <p className=" text-sm flex gap-1">
        status:
        <p className="mb-4 text-sm text-gray-500">
          {(task.completed) ? "task completed" : "task remaning"}
        </p>
      </p>
      <div className="flex space-x-4">
        <Link
          href={`/tasks/edit/${//@ts-ignore
            task._id}`}
          className="flex-1 items-center text-center p-2 bg-black hover:rounded-3xl  hover:bg-yellow-500 text-white font-bold rounded-2xl">
          <PencilIcon className="h-7 w-7  " />
          Edit
        </Link>
        <button onClick={handleDelete} className="flex-1 p-2 bg-black  hover:rounded-3xl hover:bg-red-500 text-white font-bold rounded-2xl">                                         <TrashIcon className="h-6 w-6 " />
          Delete
        </button>
      </div>
    </div>
  )
}

export default page