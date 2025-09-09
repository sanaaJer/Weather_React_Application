import React, { useContext, useEffect, useState } from 'react'
import HourlyCard from './HourlyCard'
import { apiKey } from '../App';
import { CityContext } from '../Context/CityContext';

export default function HourlyForcast() {
  // get city context
  const { state } = useContext(CityContext);
  const city = state.city;


  const  [hourForecast,setHourforecast]=useState([])
  //const url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url).then((res) => res.json())
    .then((data)=>{
      setHourforecast(data.list.slice(0, 24))
    }

    )
  },[city])
  return (
       <div className='divHourForcast'>
        {hourForecast.map((hour)=>
           <HourlyCard  hour={hour}/>
        )}
       </div>
    
     
  )
}
