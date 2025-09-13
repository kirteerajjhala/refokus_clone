import React from 'react'

function Stripe({ val }) {
  return (
    <div
      className="
        text-white
        w-full sm:w-1/2 lg:w-1/5
        border border-zinc-700
        px-4 sm:px-6 md:px-8
        py-4 sm:py-5 md:py-6
        flex justify-between items-center
        gap-4
        rounded-lg
        cursor-pointer
        transition-all duration-300
        hover:bg-zinc-800 hover:border-zinc-500
      "
    >
      {/* Logo */}
      <img
        src={val.url}
        alt="stripe-logo"
        className="h-6 sm:h-7 md:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      {/* Number */}
      <div className="font-semibold text-base sm:text-lg md:text-xl transition-transform duration-300 hover:scale-110">
        {val.number}
      </div>
    </div>
  )
}

export default Stripe
