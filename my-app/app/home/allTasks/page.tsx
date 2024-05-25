import Input from '@/components/Input'
import React from 'react'

function page() {
  return (
    <div>
      <Input name={"add task"} className={""} id={"tasks"} placeholder={"add task"} type={"string"}/>
    </div>
  )
}

export default page