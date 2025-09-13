import React from 'react'
import { motion } from 'framer-motion'

function Marque({ item, direaction }) {
  return (
    <div className="text-white w-full flex overflow-hidden whitespace-nowrap">
      {/* First loop */}
      <motion.div
        initial={{ x: direaction === "left" ? "0" : "-100%" }}
        animate={{ x: direaction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 11, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-32 lg:gap-40 py-6 sm:py-8 md:py-10 pr-10 sm:pr-20 md:pr-40"
      >
        {item.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt=""
            className="h-10 sm:h-12 md:h-16 lg:h-20 object-contain"
          />
        ))}
      </motion.div>

      {/* Second loop for infinite effect */}
      <motion.div
        initial={{ x: direaction === "left" ? "0" : "-100%" }}
        animate={{ x: direaction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 11, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-32 lg:gap-40 py-6 sm:py-8 md:py-10 pr-10 sm:pr-20 md:pr-40"
      >
        {item.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt=""
            className="h-10 sm:h-12 md:h-16 lg:h-20 object-contain"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Marque
