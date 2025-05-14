'use client';
import FlightDetailsReview from '@/app/components/FlightDetailsReview'
import TravelerDetails from '@/app/components/TravelerDetails'
import React from 'react'

const Booking = () => {
  const initialValue = 1;
  const [value, setValue] = React.useState<number>(initialValue);

  const handleRangeChange = (event: any) => {
    setValue(event.target.value);
  };

  const elements = Array.from(
    { length: value },
    (_, index) => <TravelerDetails index={index+1} />
  );

  return (
    <div className="flex flex-col justify-center max-w-5xl mx-auto gap-4">
      <div>
        <h1 className="text-2xl font-bold">Información de los pasajeros</h1>
      </div>
      <div className="grid justify-center grid-cols-3 gap-4"> 
        <div>
          <FlightDetailsReview />
        </div>
        <div className="flex flex-col col-span-2">
          <div className="flex flex-row p-3 rounded-lg bg-slate-600">
            <h4 className="text-2xl">Numero de viajeros</h4>
            <div className="flex flex-col">
              <input type="range" min="1" max="10" defaultValue="1" className="range" step="1" aria-label="range" 
                      onChange={handleRangeChange} />
              <div className="w-full flex justify-between text-xs px-2">
                <span>1</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>10</span>
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

export default Booking
