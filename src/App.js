import './App.css';
import DailyForcast from './DailyForcast';
import Filter from './Filter';
import HourlyForcast from './HourlyForcast';

function App() {
  return (
    <div className="App">
      <Filter/>
      <DailyForcast />
      <HourlyForcast></HourlyForcast>
    </div>
  );
}

export default App;
