import React from 'react'
import Link from 'next/link'

function FlightDetailsReview() {
  return (
    <div className="flight_details_review">
        <Link href="/" className="flex flex-row justify-left items-center text-lg text-indigo-500">
          <span className="icon-[tabler--arrow-left] mx-2"></span>
          <h4> Seguir buscando</h4>
        </Link>
      <div className="grid grid-cols-2">
        <div>
          <h4 className="place_label">DEP</h4>
        </div>
        <div>
          <h4 className="place_label">DES</h4>
        </div>
        <div>
          <h4 className="flex justify-center items-start text-md">Origen</h4>
        </div>
        <div>
          <h4 className="flex justify-center items-start text-md">Destino</h4>
        </div>
        <div className="pt-2 col-span-2">
          <div className="date_label">
            <h4><span className="icon-[tabler--plane-departure]"></span> Fecha placeholder</h4>
          </div>
          <div className="date_label">
            <h4><span className="icon-[tabler--plane-arrival]"></span> Fecha placeholder</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetailsReview
