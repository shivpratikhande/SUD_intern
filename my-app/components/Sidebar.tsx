import React from 'react'

function Sidebar() {
    return (
        <div className="flex h-screen">
        <div className="flex flex-col  -500">
          <div className="flex items-center justify-center h-16  w-screen bg-black text-white">
            <span className="text-lg font-semibold">Sidebar</span>
          </div>
          
          <div className="flex flex-col flex-1 overflow-y-auto w-64 gap-10 bg-black">
            <a href="#" className="py-2 px-4  text-white hover:bg-white hover:text-black hover:rounded-lg ">All Tasks</a>
            <a href="#" className="py-2 px-4  text-white hover:bg-white hover:text-black">All Tasks</a>
            <a href="#" className="py-2 px-4  text-white hover:bg-white hover:text-black">All Tasks</a>
            <a href="#" className="py-2 px-4  text-white hover:bg-white hover:text-black">All Tasks</a>
            {/* Add more sidebar items as needed */}
          </div>
        </div>
  
        {/* Main content */}
        <div className="flex-1 bg-gray-100">
          {/* Main content goes here */}
        </div>
      </div>
    );
  };


export default Sidebar