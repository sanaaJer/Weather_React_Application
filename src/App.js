import { useEffect, useState } from 'react';
import './App.css';
import Current from './Current';
import DailyForcast from './DailyForcast';
import Filter from './Filter';
import HourlyForcast from './HourlyForcast';
import { WeatherProvider } from './CityContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const apiKey = '61332d689b264e125087e027aafd0c55'; //  API key for (OpenWeather API)


// App component that will wrap all my app components
function App() {

  //inline style
  const h4_style={margin:' 1em 1.5em'};
  const div_HourForc={backgroundColor:'#3f39b7',   margin: '0 2em 1em 2em',borderRadius: '9px'};

  return (
    <div className="App">
    {/* wrap components inside my context provider */}
    <WeatherProvider>
      {/* filter compoenent */}
      <Filter/>

      <div className='div_curr_day_h'>
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

      </div>
    </WeatherProvider>
     
    
    </div>
  );
}

export default App;
