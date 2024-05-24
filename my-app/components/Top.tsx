import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Top() {
    return (
        <div>
            <div className=" bg-black items-center text-white flex justify-between p-8">

                <div >
                    <h1 className=' text-xl font-bold animate-pulse'>Welcome back shivv!</h1>
                </div>
                <div className=' '>
                    <input type="text" className=' p-1 w-72 rounded-xl h-9 text-black px-3 border border-gray-500' />
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