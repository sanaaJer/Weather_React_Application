import { useEffect, useState } from 'react';
import './App.css';
import Current from './Current';
import DailyForcast from './DailyForcast';
import Filter from './Filter';
import HourlyForcast from './HourlyForcast';
import { WeatherProvider } from './CityContext';


export const apiKey = '61332d689b264e125087e027aafd0c55'; //  API key for (OpenWeather API)

function App() {



// const city = 'London';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// const [weatherData, setWeatherData] = useState(null);


//inline style
const h4_style={margin:' 1em 1.5em'};
const div_HourForc={backgroundColor:'#3f39b7',   margin: '0 2em 1em 2em',borderRadius: '9px'};



// useEffect(() => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       setWeatherData(data)
//       alert(JSON.stringify(data, null, 2)); 
//     })
//     .catch(error => console.error(error));
// }, []);  


  return (
    <div className="App">
    {/* wrap components inside my provider */}
    <WeatherProvider>
      {/* filter compoenent */}
      <Filter/>
      {/* current and daily weather section components*/}
      <div className='div_Curr_daily'>
        {/* current weather component */}
        <Current />
        {/* 5 days forcast */}
        <DailyForcast />
      </div>
      <div style={div_HourForc} >
          <h4 style={h4_style}>24-hours forcast</h4>
          {/* 24-hour forecast component */}
          <HourlyForcast />
      </div>
    </WeatherProvider>
     
    
    </div>
  );
}

export default App;
