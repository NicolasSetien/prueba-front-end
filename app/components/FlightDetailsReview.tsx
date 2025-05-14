import React from 'react'
import Link from 'next/link'
import {TravelDetails} from '@/app/types/TravelDetails'

interface Props {
  data: TravelDetails;
}

var cityCodes = {
  "Caracas": "CCS",
  "New York": "NYC",
  "Madrid": "MAD",
  "Buenos Aires": "BUE",
}

function FlightDetailsReview() {
  return (
    <div className="flight_details_review">
        <Link href="/" className="flex flex-row justify-left items-center text-lg text-slate-400">
          <span className="icon-[tabler--arrow-left] mx-2"></span>
          <h4> Seguir buscando</h4>
        </Link>
      <div className="grid grid-cols-2 mt-2">
        <div>
          <h4 className="place_label">CCS</h4>
        </div>
        <div>
          <h4 className="place_label">NYC</h4>
        </div>
        <div>
          <h4 className="flex justify-center items-start text-md">Origen</h4>
        </div>
        <div>
          <h4 className="flex justify-center items-start text-md">Destino</h4>
        </div>
        <div className="pt-2 col-span-2">
          <div className="date_label">
            <h4><span className="icon-[tabler--plane-departure]"></span> 17/may/2025</h4>
          </div>
          <div className="date_label">
            <h4><span className="icon-[tabler--plane-arrival]"></span> 21/may/2025</h4>
          </div>
          <div className="date_label justify-between text-zinc-400 mt-2">
            <h4>Monto:</h4>
            <p>$1000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetailsReview
