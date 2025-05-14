'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FlightDetailsReview from '@/app/components/FlightDetailsReview'

const Booking = () => {
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto px-3 gap-4">
      <div>
        <h1 className="text-2xl font-bold">Servicios adicionales</h1>
      </div>
      <div className="grid justify-center md:grid-cols-3 gap-4 w-full"> 
        <div>
          <FlightDetailsReview />
          <Link href="/final_review">
            <button className="bg-emerald-600 rounded-xl my-3 w-full h-12 text-3xl cursor-pointer">Continuar</button>
          </Link>
        </div>
        <div className="flex flex-col md:col-span-2">
            <div className="additional_service">
                <div className="w-20">
                    <Image src="/insurance.jpg" alt="Insurance" width={80} height={120} />
                </div>
                <div className="flex flex-col w-full px-5">
                    <div className="flex flex-row justify-between">
                        <h4 className="text-3xl">Seguro de viaje</h4>
                        <input type="checkbox" className="m-1 switch switch-primary"/>
                    </div>
                    <p>Viaja con plena tranquilidad gracias a los planes de aseguramiento que te ofrecemos.</p>
                </div>
            </div>
            <div className="additional_service">
                <div className="w-20">
                    <Image src="/seats.jpg" alt="Plane seat" width={80} height={120} />
                </div>
                <div className="flex flex-col w-full px-5">
                    <div className="flex flex-row justify-between">
                        <h4 className="text-3xl">Asientos preferenciales</h4>
                        <input type="checkbox" className="m-1 switch switch-primary"/>
                    </div>
                    <p>Puestos de mayor accesibilidad para personas con discapacidades motoras, mujeres embarazadas o personas de la tercera edad.</p>
                </div>
            </div>
            <div className="additional_service">
                <div className="w-20">
                    <Image src="/additional.jpg" alt="Plane seat" width={80} height={120} />
                </div>
                <div className="flex flex-col w-full px-5">
                    <div className="flex flex-row justify-between items-center">
                        <h4 className="text-3xl">Asistencia especial</h4>
                        <input
                            type="checkbox"
                            className="m-1 switch switch-primary"
                            id="special-assistance-checkbox"
                            onChange={e => setShowTextarea(e.target.checked)}
                            checked={showTextarea}
                        />
                    </div>
                    {showTextarea && (
                        <textarea
                            className="mt-2 p-2 border rounded"
                            placeholder="Describe la asistencia especial que requieres"
                        />
                    )}
                    {!showTextarea && (<p>Si requieres otra forma de asistencia, permítenos saber en este formulario.</p>)}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
