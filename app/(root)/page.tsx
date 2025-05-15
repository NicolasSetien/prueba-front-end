'use client';
import ClassSelect from "@/app/components/ClassSelect";
import PlaceSelect from '@/app/components/PlaceSelect';
import Image from "next/image";
import React, { useState } from "react";
import {TravelDetails} from '@/app/types/TravelDetails'

export default async function Home() {
  const travelClasses = [
    {id: 1, name: "Economy", icon: "briefcase-2"},
    {id: 2, name: "Business", icon: "briefcase-filled"},
    {id: 3, name: "First Class", icon: "luggage"},
  ]

 /* const defaultTravelClass = travelClasses[0].name;
  const [selectedClass, setSelectedClass] = React.useState(defaultTravelClass);

  const handleClassSelect = (selectedClass: any) => {
    console.log("Selected class:", selectedClass);
  };
  
  const [origin, setOrigin] = useState('Caracas');
  const [destination, setDestination] = useState('Madrid');
  const [departure, setDeparture] = useState(new Date());
  const [returnal, setReturnal] = useState(new Date());
  const [flightClass, setFlightClass] = useState('Economy');
  const [price, setPrice] = useState(1000);
  
  const handleOriginChange = (event: any) => {
    setOrigin(event.target.value);
  };
  
  const handleDestinationChange = (event: any) => {
    setDestination(event.target.value);
  };
  
  const handleDepartureChange = (event: any) => {
    setDeparture(event.target.value);
  };
  
  const handleReturnalChange = (event: any) => {
    setReturnal(event.target.value);
  };

interface Flight {
  destination: string;
}

interface JsonData {
  items: Flight[];
}

const destinations = Array.from(
  new Set(
    (json.items as JsonData).items.map(flight => flight.destination)
  )
);
  console.log(destinations);*/


  const travelDetails: TravelDetails = {origin: "Caracas", destination: "Madrid", departure: new Date(), returnal: new Date(), flightClass: "Economy", price: 1000};

  const data = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
  const json = await data.json();

  return (
    <>
      <div className="hero_section">
        <h2 className="md:text-6xl text-center text-4xl">Con <span className="brand_name">Globetrotter,</span> llegas a donde sea</h2>
        <p className="md:text-3xl leading-10 text-center text-2xl">Visita el destino de tus sueños con nuestras tarifas competitivas.</p>
      </div>
      <div className="flex flex-col justify-center items-center my-8 mx-20">
        <div className="flight_selector">
          <div className="place_select">
            <h4 className="text-2xl">Destino</h4>
            <select id="document-type" className="select custom_field" value="---">
                <option disabled>---</option>
                <option>Madrid</option>
                <option>Nueva York</option>
                <option>Buenos Aires</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
            <div className="flight_selector_label">Fecha de salida:</div>
            <div className="flex flex-col">
              <input
                type="date"
                className="custom_field"
              />
            </div>
            <div className="md:col-span-2 col-span-1 flex md:items-center md:justify-end justify-start">
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
        <div className="grid grid-cols-3 justify-center items-center my-8 lg:w-4xl w-full gap-4">
          {travelClasses.map((travelClass) => (
            <ClassSelect travelClass={travelClass} key={travelClass.id} />
          ))}
        </div>
      </div>
    </>
  );
}
