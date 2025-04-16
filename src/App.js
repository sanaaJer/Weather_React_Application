import { useEffect, useState } from 'react';
import './styles/App.css';
import Current from './Components/Current';
import DailyForcast from './Components/DailyForcast';
import Filter from './Components/Filter';
import HourlyForcast from './Components/HourlyForcast';
import { WeatherProvider } from './Context/CityContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoadingAnimation from './Components/LoadingAnimation';

export const apiKey = '61332d689b264e125087e027aafd0c55'; //  API key for (OpenWeather API)


// App component that will wrap all my app components
function App() {
  // state loading animation 
   const [loadAnim,setLoadAnim]=useState(true);
  //inline style
  const h4_style={margin:' 1em 1.5em'};
  const div_HourForc={backgroundColor:'#3f39b7',   margin: '0 2em 1em 2em',borderRadius: '9px'};

useEffect(()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLoadAnim(false); // Stop loading when location is retrieved

      },
      (error) => {
        setLoadAnim(false)  // Hide animation on error
      });
    }
},[]);


  return (
    <div className="App">
    {/* wrap components inside my context provider */}
    <WeatherProvider>
   { loadAnim ? (
      <LoadingAnimation />):
    (
      <>
     {/* filter compoenent */}
      <Filter />
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
      </>
      )
     }

   
    </WeatherProvider>
     
    
    </div>
  );
}

export default App;
