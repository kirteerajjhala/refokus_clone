import React, { useState } from 'react'
import Button from './Button'
import { motion , AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from "react-icons/hi"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.div
    className="max-w-screen-lg mx-auto py-4 px-4 flex items-center justify-between border-b border-zinc-700 relative">
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <motion.img
          initial={{  opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
          className="h-6 sm:h-7 md:h-8"
        />

        {/* Links (hidden on small screens) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="hidden md:flex gap-6 lg:gap-10"
        >
          {["Home", "work", "Careers", "", "News"].map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              {item.length === 0 && (
                <span className="w-[1px] h-6 bg-zinc-700"></span>
              )}
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="w-1 h-1 bg-green-600 rounded-full inline-block"
                ></span>
              )}
              <a
                href="#"
                className="text-white text-sm hover:text-green-400 transition"
              >
                {item}
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Desktop Button */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden sm:block"
        >
          <Button />
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className="text-white text-2xl cursor-pointer" />
          ) : (
            <HiMenuAlt3 className="text-white text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-700 flex flex-col items-center py-6 gap-6 md:hidden z-50"
          >
            {["Home", "work", "Careers", "News"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white text-lg hover:text-green-400 transition"
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
