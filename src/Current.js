import React, { useContext, useEffect, useState } from 'react'
import { apiKey } from './App';
import { CityContext } from './CityContext';

export default function Current() {
  const [currWeath,setCurrWeath] = useState({
    temp:'',
    description:'',
    iconCode:'',
    humidity:'',
    windSpeed:'',
    pressure:'',
    visibility:''
});


const {state}=useContext(CityContext);
const city = state.city;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//  handle fetch current weather information from API
useEffect(() => {
if (!city) return; // Ensure city exists
fetch(url)
.then((res) => res.json())
.then((data) => {
              
 setCurrWeath({
     temp: data.main.temp,
     description: data.weather[0].description,
     iconCode: data.weather[0].icon,
     humidity: data.main.humidity,
     windSpeed: data.wind.speed,
     pressure:data.main.pressure,
     visibility:data.visibility

 });
})
.catch((err) => console.error('Fetch error:', err));
}, [city]);

const iconUrl=`http://openweathermap.org/img/wn/${currWeath.iconCode}@2x.png`;

  return (
    <div className='div_current'>

      <div style={{display:'flex',flexDirection:'column'}}>
        {/* current temperature  */}
        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center'}}>
           <h3>{city}</h3>
           <img  src={iconUrl} style={{width:'8em',height:'6.5em'}}/>
            <h4>{currWeath.temp} °C</h4>
        </div>
        <div  style={{flex:1,display:'flex',flexDirection:'column'}}>
            <div style={{flex:1,display:'flex',flexDirection:'row',paddingBottom:'1.5em'}}>
                   {/* current humidity */}
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'2px solid white'}}>
                        <p style={{margin:0}}>Humidity</p>
                        <h4 style={{margin:0}}>{currWeath.humidity}</h4>
                    </div>
                    {/* current wind speedy */}
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}}>
                        <p style={{margin:0}}>Wind speed</p>
                        <h4 style={{margin:0}}>{currWeath.windSpeed}</h4>
                    </div>
            </div>

            <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                  {/* current pressure */}
                   <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'2px solid white'}}>
                        <p style={{margin:0}}>Pressure</p>
                        <h4 style={{margin:0}}>{currWeath.pressure}</h4>
                    </div>
                    {/* current visibility */}
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}}>
                        <p style={{margin:0}}>Visibility</p>
                        <h4 style={{margin:0}}>{currWeath.visibility}</h4>
                    </div>
            </div>


          


        </div>
      </div>
    </div>
  )
}
