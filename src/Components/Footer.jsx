import React from 'react'

function Footer() {
  return (
    <div className="w-full mt-20 text-white py-10 px-4 sm:px-6">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row w-full gap-10 lg:gap-20">
          
          {/* Socials */}
          <div>
            <h3 className="mb-4 capitalize text-zinc-400 text-sm sm:text-md font-semibold">
              socials
            </h3>
            {["instagram", "twitter (x)", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-sm capitalize mb-2 whitespace-nowrap text-zinc-500 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="mb-4 capitalize text-zinc-400 text-sm sm:text-md font-semibold">
              sitemap
            </h3>
            {["Home", "work", "career", "contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-sm capitalize mb-2 whitespace-nowrap text-zinc-500 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* About / Badge */}
          <div className="flex flex-col w-full items-start lg:items-end gap-6 mt-6 lg:mt-0">
            <p className="text-sm text-zinc-400 lg:text-end max-w-xs">
              Refokus is a pioneering digital agency driven by design and empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="Webflow Badge"
              className="w-24 sm:w-28 md:w-32"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
