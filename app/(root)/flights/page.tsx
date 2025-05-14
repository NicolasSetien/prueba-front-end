'use client';
import FlightDetailsReview from '@/app/components/FlightDetailsReview'
import TravelerDetails from '@/app/components/TravelerDetails'
import React from 'react'
import Link from 'next/link'
import {TravelDetails} from '@/app/types/TravelDetails'

interface Props {
  data: TravelDetails;
}

var city_codes = {
  "Caracas": "CCS",
  "New York": "NYC",
  "Madrid": "MAD",
  "Buenos Aires": "BUE",
}

const Flights = () => {
  const [travelerQty, setTravelerQty] = React.useState<number>(1);
  const [petQty, setPetQty] = React.useState<number>(0);
  const [baggageQty, setBaggageQty] = React.useState<number>(0);

  const handleRangeChange = (event: any) => {
    setTravelerQty(event.target.value);
  };

  const elements = Array.from(
    { length: travelerQty },
    (_, index) => <TravelerDetails index={index+1} />
  );

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto px-3 gap-4">
      <div>
        <h1 className="text-2xl font-bold flex md:justify-start justify-center">Información de los pasajeros</h1>
      </div>
      <div className="grid justify-center md:grid-cols-3 gap-4 w-full"> 
        <div>
          <FlightDetailsReview />
          <div className="flight_details_review">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-xl">Mascotas</h4>
                <input
                  className="text-center custom_field w-20"
                  type="text"
                  value={petQty}
                  onChange={e => {
                    const val = Number(e.target.value);
                    if (!isNaN(val) && val >= 0) setPetQty(val);
                  }}
                  id="number-input-mini"
                />
            </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-xl">Equipaje adicional</h4>
                <input
                  className="text-center custom_field w-20"
                  type="text"
                  value={baggageQty}
                  onChange={e => {
                    const val = Number(e.target.value);
                    if (!isNaN(val) && val >= 0) setBaggageQty(val);
                  }}
                  id="number-input-mini"
                />
            </div>
          </div>
          <Link href="/booking">
            <button className="bg-emerald-600 rounded-xl my-3 w-full h-12 text-3xl cursor-pointer">Continuar</button>
          </Link>
        </div>
        <div className="flex flex-col md:col-span-2">
          <div className="flex md:flex-row flex-col p-3 rounded-xl bg-slate-600">
            <h4 className="text-2xl m-2">Numero de viajeros</h4>
            <div className="flex flex-col">
              <input type="range" min="1" max="10" defaultValue="1" className="range p-1 my-2 w-full" step="1" aria-label="range" 
                      onChange={e => setTravelerQty(Number(e.target.value))} />
              <div className="w-full flex justify-between px-2">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
              </div>
            </div>
          </div>
          {elements.map((element, index) => (
            <div key={index}>
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Flights
