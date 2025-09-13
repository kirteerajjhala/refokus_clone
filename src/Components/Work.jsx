import React, { useState } from 'react'
import { useScroll,motion } from "framer-motion";


function Work() {
  let images = [
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: '40%', left: "40%", isactive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: '50%', left: "45%", isactive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: '53%', left: "47%", isactive: false },
    { url: "", top: '40%', left: "55%", isactive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: '55%', left: "35%", isactive: false },
    { url: "https://images.unsplash.com/photo-1599514519030-d2df3db73edb?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0", top: '60%', left: "55%", isactive: false },
  ]

  let [image, setImage] = useState(images)
  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (Data) => {
    const updateImages = (arr) => {
      setImage((pre) =>
        pre.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isactive: false }
            : { ...item, isactive: true }
        )
      )
    }

    switch (Math.floor(Data * 100)) {
      case 0: updateImages([]); break
      case 1: updateImages([0]); break
      case 2: updateImages([1]); break
      case 3: updateImages([0, 1]); break
      case 4: updateImages([0, 1, 2]); break
      case 5: updateImages([0, 1, 2, 3]); break
      case 6: updateImages([0, 1, 2, 3, 4]); break
      default: break
    }
  })

  return (
    <div className="w-full mt-10 px-3">
      <div className="max-w-screen-lg mx-auto relative">
        {/* Responsive Heading */}
        <motion.h1 initial={{y:90}}
        animate={{y:0}}
        transition={{duration:0.89 ,delay :0.50} }
        className="text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[22vw] text-white text-center font-medium select-none leading-none tracking-tight">
          Work
        </motion.h1>

        {/* Responsive Images */}
        <div className="w-full absolute top-0 h-full p-2 sm:p-3">
          {image.map((item, index) =>
            item.isactive && (
              <img
                key={index}
                src={item.url}
                alt=""
                className="absolute w-24 sm:w-36 md:w-48 lg:w-60 -translate-x-1/2 -translate-y-1/2"
                style={{ top: item.top, left: item.left }}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Work
