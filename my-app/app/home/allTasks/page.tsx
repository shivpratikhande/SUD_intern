import Block from '@/components/Block'
import Input from '@/components/Input'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div>
      <Block>
      <Input name={"Task Name"} className={""} id={"tasks"} placeholder={"add task"} type={"string"}/>
      <Input name={"Description"} className={""} id={"tasks"} placeholder={"add task"} type={"string"}/>
      <Input name={"add task"} className={""} id={"tasks"} placeholder={"add task"} type={"string"}/>

      <Button className=' w-full'>Submit</Button>


      </Block>
      
    </div>
  )
}

export default page