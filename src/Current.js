import React, { useContext, useEffect, useState } from 'react'
import { apiKey } from './App';
import { CityContext } from './CityContext';

export default function Current() {

  // inline styles
  const currData_style={flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'2px solid white'}
  const sec_currData_style={flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}
  const rowFex_style={flex:1,display:'flex',flexDirection:'row',paddingBottom:'1.5em'}
  const colFlex_style={flex:1,display:'flex',flexDirection:'column'}
  const div_curr_col={flex:1,display:'flex',flexDirection:'column',alignItems:'center'}
 const div_container_curr={display:'flex',flexDirection:'column'}
 const margin_style={margin:0};

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
      <div style={div_container_curr}>
        {/* current temperature  */}
        <div style={div_curr_col}>
           <h3>{city}</h3>
           <img  src={iconUrl} className='img_curr'/>
            <h4>{currWeath.temp} °C</h4>
        </div>
        <div  style={colFlex_style}>
            <div style={rowFex_style}>
                   {/* current humidity */}
                    <div style={currData_style}>
                        <p style={margin_style}>Humidity</p>
                        <h4 style={margin_style}>{currWeath.humidity}</h4>
                    </div>
                    {/* current wind speedy */}
                    <div style={sec_currData_style}>
                        <p style={margin_style}>Wind speed</p>
                        <h4 style={margin_style}>{currWeath.windSpeed}</h4>
                    </div>
            </div>

            <div style={rowFex_style}>
                  {/* current pressure */}
                   <div style={currData_style}>
                        <p style={margin_style}>Pressure</p>
                        <h4 style={margin_style}>{currWeath.pressure}</h4>
                    </div>
                    {/* current visibility */}
                    <div style={sec_currData_style}>
                        <p style={margin_style}>Visibility</p>
                        <h4 style={margin_style}>{currWeath.visibility}</h4>
                    </div>
            </div>


          


        </div>
      </div>
    </div>
  )
}
