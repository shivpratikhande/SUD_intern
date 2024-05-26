import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaSearch } from 'react-icons/fa';





function Top() {
    return (
        <div>
            <div className=" bg-black items-center text-white flex justify-between p-8">

                <div className=' bg-white text-black p-[2px] px-3 rounded-xl animate-pulse ' >
                    <h1 className=' md:text-4xl font-bold  font-mono pt-2  '> BUDDY</h1>
                </div>
                <div className=' bg-white flex text-center items-center px-5 rounded-xl   '>
                <FaSearch className="h-5 w-5 text-gray-400 mr-2" />

                    <input 
                    type="text" 
                    className=' p-1  w-32  sm:w-48  xl:w-72 rounded-xl h-9 text-black px-3 border-none focus:outline-none   ' 
                    placeholder='Search...' />
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>

                </div>

            </div>
        </div>
    )
}

export default Top