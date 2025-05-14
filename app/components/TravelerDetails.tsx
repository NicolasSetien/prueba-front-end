import React from 'react'

const TravelerDetails = ({index}: {index: number}) => {

  return (
    <div className="my-3 border-2 border-zinc-500 rounded-xl opacity-100 transition-opacity">
        <div className="w-full flex px-4 py-2 rounded-t-lg text-2xl bg-emerald-600 text-white">
            Viajero {index}
        </div>
      <div className="p-5 rounded-b-lg grid grid-cols-2 gap-4">
        <div>
            <div className="traveler_label">Nombre completo</div>
            <input type="text" className="custom_field w-full" id="name" placeholder="Ingrese su nombre" />
        </div>
        <div>
            <div className="traveler_label">Fecha de nacimiento</div>
            <input type="date" className="custom_field" />
        </div>
        <div className="col-span-2">
            <div className="traveler_label">Número de documento de identificación</div>
                <div className="flex flex-row">
                <select id="document-type" className="select custom_field max-w-max" defaultValue="-">
                    <option>-</option>
                    <option>DNI</option>
                    <option>Pas.</option>
                </select>
                <input type="text" className="custom_field" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default TravelerDetails
