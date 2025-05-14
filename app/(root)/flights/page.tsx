import FlightDetailsReview from '@/app/components/FlightDetailsReview'
import React from 'react'

const Booking = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Información de los pasajeros</h1>
      </div>
      <div className="grid justify-center items-center grid-cols-3 gap-4"> 
        <div>
          <FlightDetailsReview />
        </div>
        <div className="flex col-span-2">
          <FlightDetailsReview />
        </div>
      </div>
    </>
  )
}

export default Booking
