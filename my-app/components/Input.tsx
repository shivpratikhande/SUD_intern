import React from 'react'

//@ts-ignore
function Input({ type, placeholder, id, name, className, change }) {
  return (
      <div className=' flex flex-col m-3 p-2 gap-2'>
        <label
          htmlFor={id}
          className={`font-mono font-semibold text-xl ${className}`}  >
          # {name}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className=' p-3 rounded-xl px-4 border-zinc-500 border-2'
          onChange={change}
        />
      </div>

  )
}

export default Input