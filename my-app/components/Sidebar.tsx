"use client"
import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import Link from 'next/link';
import { PlusIcon } from '@radix-ui/react-icons';

function Sidebar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  function handleClick(linkName: string) {
    setSelectedLink(linkName);
  }

  return (
    <div className="flex h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col flex-1 overflow-y-auto w-72 text-xl gap-5 py-2 bg-black">
      
         
          <Link
            href="/home/addTask"
            className={` pl-5 py-2 px-4 ${selectedLink === 'addTask' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg flex gap-3`}
            onClick={() => handleClick('addTask')}
          >
            Add Task
            <PlusIcon className="h-6 w-6 border-2 border-white rounded-full font-bold" />

          </Link>
          <Link
            href="/home/today"
            className={` pl-5 py-2 px-4 ${selectedLink === 'today' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('today')}
          >
            Today
          </Link>
          <Link
            href="/home/allTasks"
            className={` pl-5 py-2 px-4 ${selectedLink === 'allTasks' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('allTasks')}
          >
            All Tasks
          </Link>
          <Link
            href="/home/completed"
            className={` pl-5 py-2 px-4 ${selectedLink === 'completedTask' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('completedTask')}
          >
            Completed Task
          </Link>
          <Link
            href="/home/labels"
            className={` pl-5 py-2 px-4 ${selectedLink === 'labels' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('labels')}
          >
            Labels
          </Link>
          <Link
            href="/home/calender"
            className={` pl-5 py-2 px-4 ${selectedLink === 'calendar' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('calendar')}
          >
            Calendar
          </Link>
          <Link
            href="/home/dashboard"
            className={` pl-5 py-2 px-4 ${selectedLink === 'dashboard' ? 'bg-white text-black' : 'text-white'} hover:bg-white hover:text-black hover:rounded-lg transition duration-500 rounded-lg`}
            onClick={() => handleClick('dashboard')}
          >
            Dashboard
          </Link>
          {/* Add more sidebar items as needed */}
        </div>
      </div>
      {/* Main content */}
     {/*  <div className="flex-1 bg-gray-100">
        <div className='flex justify-center my-8'>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
