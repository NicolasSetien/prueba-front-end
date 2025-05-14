import React from 'react'
import Image from 'next/image'
import PlaceSelect from './PlaceSelect'

const FlightSelector = () => {
  return (
    <div className="flight_selector">
      <Image src="/logo.png" alt="Logo" width="80" height="80"></Image>
      <PlaceSelect label={"Origen"}/>
      <PlaceSelect label={"Destino"}/>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="flight_selector_label">Fecha de salida:</div>
        <div className="flex flex-col">
          <input
            type="date"
            className="custom_field"
          />
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <span>Solo ida </span>
          <input type="checkbox" className="m-1 switch switch-primary"/>
        </div>
        <div className="flight_selector_label">Fecha de retorno:</div>
        <div className="flex flex-col">
          <input
            type="date"
            className="custom_field"
          />
        </div>
      </div>
    </div>
  )
}

export default FlightSelector
