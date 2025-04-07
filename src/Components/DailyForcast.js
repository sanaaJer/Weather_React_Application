import React, { useContext, useEffect, useState } from 'react'
import DailyCard from './DailyCard'
import { apiKey } from '../App';
import { CityContext } from '../Context/CityContext';

export default function DailyForcast() {
  
  // get global state city
  const {state}=useContext(CityContext);
  const city = state.city;
  // forecast url 
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
 // forecast state variable
  const [forecast, setForecast] = useState([]);


   // isLoading data state to set if loading state is active
   const [isLoading,setIsLoading]=useState(false);




useEffect( ()=>{
  
fetch(url)
.then((res) => res.json())
.then((data) => {
  const forecast=data.list.filter((item, index, arr) => {
    const date = item.dt_txt.split(" ")[0]; // Extract YYYY-MM-DD
    return arr.findIndex((el) => el.dt_txt.split(" ")[0] === date) === index;
  });
  // Update state with filtered data
  setForecast(forecast.slice(0, 5));
})
}
,[city])


  return (
    <div className='divDailyForcas'>
        <h4> 5-Days Forecast</h4>
        {forecast.map((e)=>  <DailyCard  day={e} />)}
    
    </div>
  )
}
