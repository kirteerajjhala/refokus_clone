import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width = "full", start, end }) {
  return (
    <motion.div
      className={`
        w-full sm:w-${width} 
        bg-zinc-800 text-white rounded-xl cursor-pointer 
        transition-all duration-300
        p-4 sm:p-6 md:p-7 
        flex flex-col justify-between
        hover:bg-violet-700
      `}
    >
      {/* Header + Icon */}
      <div className={`${end && "hover:p-2 transition-all duration-300"}`}>
        <div className="head w-full flex items-center justify-between">
          <p className="text-sm sm:text-base md:text-lg">one heading</p>
          <IoIosArrowRoundForward className="text-lg sm:text-xl md:text-2xl" />
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 font-semibold">
          Animations heading
        </h3>
      </div>

      {/* Start Section */}
      {start && (
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight">
            Start a project
          </h1>
          <button className="rounded-full px-4 sm:px-5 py-2 border border-white mt-5 sm:mt-7 text-xs sm:text-sm md:text-base">
            Contact Us
          </button>
        </div>
      )}

      {/* End Section */}
      {end && (
        <p className="text-[10px] sm:text-xs md:text-sm font-thin mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      )}
    </motion.div>
  )
}

export default Card
