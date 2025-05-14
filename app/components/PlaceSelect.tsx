import React from 'react'

function PlaceSelect({ label }: { label: string }) {
  return (
    <div className="place_select">
      <h4 className="text-xl">{label}</h4>
      <input
        type="text"
        className="custom_field"
        placeholder="---"
        />
    </div>
  )
}

export default PlaceSelect
