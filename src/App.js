import { useEffect, useState } from 'react';
import './App.css';
import Current from './Current';
import DailyForcast from './DailyForcast';
import Filter from './Filter';
import HourlyForcast from './HourlyForcast';


function App() {
  
const apiKey = '61332d689b264e125087e027aafd0c55'; // Your API key
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const [weatherData, setWeatherData] = useState(null);


useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setWeatherData(data)
      alert(JSON.stringify(data, null, 2)); 
    })
    .catch(error => console.error(error));
}, []);  


  return (
    <div className="App">
      
      <Filter/>
      <div className='div_Curr_daily'>
      <Current></Current>
      <DailyForcast />
      </div>
       
       <div style={{backgroundColor:'#3f39b7',   margin: '0 2em 1em 2em',borderRadius: '9px'}} >
        <h4 style={{margin:' 1em 1.5em'}}>24-hours forcast</h4>
       <HourlyForcast></HourlyForcast>
       </div>
     
    </div>
  );
}

export default App;
