"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';


function page() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error)
            setLoading(false);
          }
        };
    
        fetchTasks();
      }, []);


    return (
        <div>

            {
                //@ts-ignore
                tasks.map((task) => (
                    <div key={task._id} className="mb-4 p-4 bg-gray-100 rounded">
                        <h2 className="text-xl font-bold">{task.title}</h2>
                        <p>{task.description}</p>
                        <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Reminder Email: {task.email}</p>
                        <div className="flex space-x-4">
                            <Link href={`/tasks/edit/${task._id}`} className="flex-1 text-center p-2 bg-yellow-500 text-white font-bold rounded">
                                Edit
                            </Link>
                            <Link href={`/home/allTasks/${task._id}`} className="flex-1 text-center p-2 bg-blue-500 text-white font-bold rounded">
                                View
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default page