import React from 'react'
import Stripe from './Stripe'
import { motion } from 'framer-motion'
function Stripes() {
  let Data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 52,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 13,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 90,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 21,
    },
  ]

  return (
    <motion.div
    initial={{opacity :0 , x:-200}}
    animate={{opacity :1, x:0}}
    transition={{duration:1 ,delay :1}}
    className="w-full mt-20 px-4 sm:px-6">
      <div
        className="
          w-full
          flex flex-wrap
          justify-center lg:justify-between
          
         
        "
      >
        {Data.map((item, index) => (
          <Stripe key={index} val={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default Stripes
