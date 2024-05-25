import Block from '@/components/Block'
import Input from '@/components/Input'
import { Button } from '@/components/ui/button'
import React from 'react'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function page() {
  return (
    <div className='flex justify-center'>
      <Block>
        <form action="">

          <Input name={"Task Name"} className={""} id={"tasks"} placeholder={"add task"} type={"string"} />
          <Input name={"Description"} className={""} id={"tasks"} placeholder={"add task"} type={"string"} />
          <Input name={"Add Label"} className={""} id={"tasks"} placeholder={"add task"} type={"string"} />

          <div className=' py-2 pb-5 px-6'>
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one"> Set Remainder</Label>
              </div>
            </RadioGroup>

          </div>
          <Button className=' w-full'>Submit</Button>{/*  */}



        </form>






      </Block>
    </div>
  )
}

export default page