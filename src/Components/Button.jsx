import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className='
      min-w-28 sm:min-w-32 md:min-w-36 lg:min-w-40 
      px-2 sm:px-3 md:px-4 
      py-1.5 sm:py-2 md:py-2.5
      rounded-full bg-zinc-100 text-black 
      flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-7 justify-center
      cursor-pointer hover:bg-zinc-200 transition
    '>
      <span className='text-xs sm:text-sm md:text-base font-medium'>
        {title}
      </span>
      <IoIosReturnRight className="text-xs sm:text-sm md:text-base" />
    </div>
  )
}

export default Button
