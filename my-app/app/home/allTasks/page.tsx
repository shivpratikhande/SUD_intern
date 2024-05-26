"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Block from '@/components/Block';
import { TrashIcon } from '@radix-ui/react-icons';
import { EyeIcon, PencilIcon } from '@heroicons/react/16/solid';


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
        <div className=' '>

            <Block className='overflow-auto h-[75vh]'>
                <h1 className="text-3xl font-bold mb-4">All Tasks</h1>

                {
                    //@ts-ignore
                    tasks.map((task) => (
                        <div key={task._id} className="mb-4 p-4 bg-gray-100 rounded">
                            <div className=' flex justify-between items-center'>
                                <div>
                                    <h2 className="text-xl font-bold">{task.title}</h2>
                                    <p>{task.description}</p>
                                    <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Reminder Email: {task.email}</p>
                                </div>
                                <div className=" flex gap-3 ">
                                    <Link href={`/tasks/edit/${task._id}`} className="flex-1 text-center p-2 items-center  hover:bg-black bg-yellow-500 text-white hi font-bold rounded">
                                        <PencilIcon className="h-6 w-6" />
                                        <h1 className=' text-sm p-1'>Edit</h1>
                                    </Link>
                                    <Link href={`/home/allTasks/${task._id}`} className="flex-1  p-2 items-center text-center  bg-black hover:bg-blue-500 text-white font-bold rounded">
                                        <EyeIcon className="h-6 w-6 ml-1" />
                                        <h1 className=' text-sm p-1'>View</h1>

                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
            </Block>
        </div>
    )
}

export default page