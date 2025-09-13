import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className="w-full px-3 sm:px-5">
      <div
        className="
          max-w-screen-lg mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5
          min-h-[20rem] sm:min-h-[25rem]
        "
      >
        {/* First Card */}
        <Card width="full" start={false} end={true} />

        {/* Second Card */}
        <Card width="full" hover="violet-700" start={true} end={false} />
      </div>
    </div>
  )
}

export default Cards
