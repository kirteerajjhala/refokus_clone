import React from 'react'
import Button from './Button'

function Product({ item, Onmouver, index }) {
  return (
    <div className="w-full text-white px-4 sm:px-6">
      <div
        onMouseEnter={() => Onmouver(index)}
        className="
          max-w-screen-lg mx-auto
          flex flex-col md:flex-row items-start md:items-center justify-between
          gap-6 md:gap-10
          min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem]
          py-6
        "
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {item.title}
        </h1>

        {/* Description + Buttons */}
        <div className="des w-full md:w-1/3">
          <p className="mb-6 sm:mb-8 text-sm sm:text-base font-thin leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-5">
            {item.success && <Button />}
            {item.fail && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
