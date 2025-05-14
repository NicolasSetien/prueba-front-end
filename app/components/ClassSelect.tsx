import React from 'react'

interface TravelClass {
  id: number;
  name: string;
  icon: string;
}

function ClassSelect({ travelClass }: { travelClass: TravelClass }) {
  return (
    <div className="class_select">
      <div>
        <span className={`icon[tabler--${travelClass.icon}]`}></span>
      </div>
      <div className="text-2xl">{travelClass.name}</div>
    </div>
  )
}

export default ClassSelect
