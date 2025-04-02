import React from 'react'
import HourlyCard from './HourlyCard'

export default function HourlyForcast() {
  const tab=new Array(24).fill(0);
  return (
       <div className='divHourForcast'>
        {tab.map((_)=>
           <HourlyCard />
        )}
       </div>
    
     
  )
}
