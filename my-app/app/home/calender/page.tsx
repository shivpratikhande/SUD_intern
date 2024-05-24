"use client"
import { Calendar } from '@/components/ui/calendar';
import React, { useState } from 'react';


function page() {
    
    const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
        <div className="flex-1 bg-gray-100">
        <div className='flex justify-center my-8'>
        
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  )
}

export default page