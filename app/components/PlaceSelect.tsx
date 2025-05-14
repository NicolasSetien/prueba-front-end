import React from 'react'

function PlaceSelect({ label }: { label: string }) {
  return (
    <div className="place_select">
      <h4 className="text-2xl">{label}</h4>
      <select id="document-type" className="select custom_field" value="---">
          <option disabled>---</option>
          <option>Madrid</option>
          <option>Nueva York</option>
          <option>Buenos Aires</option>
      </select>
    </div>
  )
}

export default PlaceSelect
