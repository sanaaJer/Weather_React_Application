import React from 'react'
import DailyCard from './DailyCard'

export default function DailyForcast() {
  return (
    <div className='divDailyForcas'>
        <h4 >5-Days Forecast</h4>
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
    </div>
  )
}
