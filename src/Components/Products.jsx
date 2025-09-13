import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
  let [pos, setPos] = useState(0)

  let Data = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      success: true,
      fail: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      success: true,
      fail: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      success: true,
      fail: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      success: true,
      fail: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      success: true,
      fail: true,
    },
  ]

  const Onmouver = (index) => {
    setPos(index * 20)
  }

  return (
    <div className="flex flex-col mt-20 sm:mt-32 relative">
      {/* Products List */}
      {Data.map((item, index) => (
        <Product
          key={index}
          Onmouver={Onmouver}
          item={item}
          index={index}
        />
      ))}

      {/* Videos (Hidden on mobile) */}
      <div className="hidden md:block w-full h-[16rem] sm:h-[18rem] md:h-[20rem] absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "0.5rem" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-full md:w-[28rem] lg:w-[30rem] h-full left-1/2 md:left-[30%] lg:left-[27%] absolute overflow-hidden"
        >
          {/* Each Video */}
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <video autoPlay loop muted playsInline src="/videos/arqitel-D3jJRwFT.mp4"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <video autoPlay loop muted playsInline src="/videos/ttr-CUQdDHBj.mp4"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <video autoPlay loop muted playsInline src="/videos/yir-BzJiRbqx.mp4"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <video autoPlay loop muted playsInline src="/videos/yahoo-D7WzLbum.mp4"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <video autoPlay loop muted playsInline src="/videos/rainfall-BZC7HG1T.mp4"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
