import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Nav() {
  return (
    <div className=' bg-transparent  items-center'>
        <nav className=' flex justify-between p-5 px-16 items-center'>
            <div>
                <h1 className=' font-bold text-2xl hover:animate-bounce'>Buddy</h1>
            </div>
            <div className=' flex gap-5 items-center'>
                <ol className=' flex justify-between gap-5'>
                    <li>About</li>
                    <li>sign in</li>
                    <li>sign up</li>
                </ol>
                <Button>start</Button>
            </div>
        </nav>
    </div>
  )
}

export default Nav