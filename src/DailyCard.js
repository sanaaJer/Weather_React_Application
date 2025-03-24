import React from 'react'

export default function DailyCard() {
  return (
    <div style={{display:'flex',flexDirection:'row',gap:'6em'}}>
        <p>Tuesday</p>
        <img  src='/weather.png' style={{width:'2em',height:'2em'}}/>
        <p>25°</p>
    </div>
  )
}
