"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { TrashIcon } from '@radix-ui/react-icons';
import { EyeIcon, PencilIcon } from '@heroicons/react/16/solid';
import Block from '@/components/Block';


interface Task {
    _id: string;
    title: string;
    description: string;
    deadline: string; // Assuming deadline is a string for now
    email: string; // Assuming email is a string for now
}

function Page() {
    const [tasks, setTasks] = useState<Task[]>([]); 
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [searchTerm, setSearchTerm] = useState<string>(''); 


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tasks');
                setTasks(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    useEffect(() => {
        // Filter tasks based on search term
        const filtered = tasks.filter(task =>
            //@ts-ignore
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTasks(filtered);
    }, [searchTerm, tasks]);

    //@ts-ignore
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    

    return (
        <div className=''>
            <Block className='overflow-auto h-[75vh]'>
                <h1 className="text-3xl font-bold mb-4">All Tasks</h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search tasks"
                    className="border p-2 mb-4"
                />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredTasks.map(task => (
                        <div key={task._id} className="mb-4 p-4 bg-gray-100 rounded">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="text-xl font-bold">{task.title}</h2>
                                    <p>{task.description}</p>
                                    <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Reminder Email: {task.email}</p>
                                </div>
                                <div className="flex gap-3">
                                            
                                    <Link href={`/tasks/edit/${task._id}`} className="flex-1 text-center p-2 items-center hover:bg-black bg-yellow-500 text-white hi font-bold rounded">
                                        <PencilIcon className="h-6 w-6" />
                                        <span className='text-sm p-1'>Edit</span>
                                    </Link>
                                    <Link href={`/home/allTasks/${task._id}`} className="flex-1 p-2 items-center text-center bg-black hover:bg-blue-500 text-white font-bold rounded">
                                        <EyeIcon className="h-6 w-6 ml-1" />
                                        <span className='text-sm p-1'>View</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </Block>
        </div>
    );
}

export default Page;
