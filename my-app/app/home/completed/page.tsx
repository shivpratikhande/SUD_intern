"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Block from '@/components/Block'
import Link from 'next/link'

function page() {
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
  return (
    <div>
      <Block className=' overflow-auto h-[75vh]'>
        {
          //@ts-ignore

          tasks
            .filter(task => task.completed)
            .map((task) => (
              <div key={task._id} className="mb-4 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-bold">{task.title}</h2>
                <p>{task.description}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
                <p className="text-sm text-gray-500">Reminder Email: {task.email}</p>
                <div className="flex space-x-4 mt-4">

                  <Link href={`/home/allTasks/${task._id}`} className="flex-1 text-center p-2 bg-black  hover:bg-blue-500 text-white font-bold rounded-lg">
                    View
                  </Link>
                </div>
              </div>
            ))}
      </Block>
    </div>
  )
}

export default page