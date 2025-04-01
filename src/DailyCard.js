import React, { useContext, useEffect, useState } from 'react'




export default function DailyCard() {

  return (
    <div style={{display:'flex',flexDirection:'row',gap:'10vw',justifyContent:'center'}}>
        <p >Tuesday</p>
        <img  src='/weather.png' style={{width:'2em',height:'2em'}}/>
        <p >25°</p>
    </div>
  )
}
