'use client'
import React from 'react'
import Cover from './Cover'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function Heading() {

    const router = useRouter();

    const handleClick = () => {
           router.push('/home');
    };

    return (
        <Cover>
            <div className=' my-7 pt-24 flex flex-col items-center '>
                <h1 className=' text-5xl font-semibold   animate-pulse'>"Stay Organized, Stay Productive"
</h1>
                <p className=' py-5 '>Effortlessly manage your tasks, boost your productivity, and stay organized with ease."</p>

                <Button className=' py-5 my-5 animate-bounce' onClick={handleClick} >Get statred</Button>
            </div>
        </Cover>

    )
}

export default Heading