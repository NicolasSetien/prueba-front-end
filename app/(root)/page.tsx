'use client';
import ClassSelect from "@/app/components/ClassSelect";
import PlaceSelect from '@/app/components/PlaceSelect';
import Image from "next/image";
import React from "react";

export default async function Home() {
  const travelClasses = [
    {id: 1, name: "Economy", icon: "briefcase-2"},
    {id: 2, name: "Business", icon: "briefcase-filled"},
    {id: 3, name: "First Class", icon: "luggage"},
  ]

  const defaultTravelClass = travelClasses[0].name;
  const [selectedClass, setSelectedClass] = React.useState(defaultTravelClass);

  const handleClassSelect = (selectedClass: any) => {
    console.log("Selected class:", selectedClass);
  };

  const details = {

  }

  const data = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
  const json = await data.json();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Talia!!! :3</h1>
      <div className="hero_section">
        <h2 className="text-6xl">Con <span className="brand_name">Globetrotter,</span> llega a donde sea</h2>
        <p className="text-3xl leading-10">Acércate al viaje de tus sueños con nuestras tarifas competitivas.</p>
      </div>
      <div className="flex justify-center items-center my-8 mx-20">
        <div className="flight_selector">
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
      </div>
      <div className="flex justify-center items-center my-8 mx-20 gap-4">
        {travelClasses.map((travelClass) => (
          <ClassSelect travelClass={travelClass} key={travelClass.id} />
        ))}
      </div>
    </>
  );
}
