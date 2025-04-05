import React from 'react'

export default function HourlyCard({hour}) {
  // get time (HH:MM)
  const time = new Date(hour.dt_txt).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  // get icon
  const iconUrl = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;

  // get temperature
  const temperature = Math.round(hour.main.temp);

  return (
    <div className='HourCard'>
        <p>{time} </p>
        <img  src={iconUrl} style={{width:'2.5em',height:'2.5em'}}/>
        <h4>{temperature}°</h4>
    </div>
  )
}
