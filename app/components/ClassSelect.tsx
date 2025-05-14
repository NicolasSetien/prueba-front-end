import React from 'react'
import Link from 'next/link'

interface TravelClass {
  id: number;
  name: string;
  icon: string;
}

function ClassSelect({ travelClass }: { travelClass: TravelClass }) {
  return (
    <Link href="/flights" className="class_select">
      <div>
        <span className={`icon[tabler--${travelClass.icon}]`}></span>
      </div>
      <div className="text-2xl flex justify-center">{travelClass.name}</div>
    </Link>
  )
}

export default ClassSelect
