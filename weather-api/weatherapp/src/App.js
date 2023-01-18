import './App.css';
import clear from './weather-icons/clear.svg';
import mostlycloudy from './weather-icons/mostlycloudy.svg';
function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <input type="text" placeholder="london"></input>
        <button>FIND WEATHER</button>
      </div>
      <div className="body">      
        <img src={mostlycloudy} />
        <h3>overcast clouds</h3>
        <div className='one'><p className='strong'>Tempreture</p><p>10C to 11C</p> </div>
        <div className='two'><p className='strong' >humidity</p> <p>78%</p> <p className='strong'>pressure</p><p>100.48</p>
</div>
      </div>
      <div className="footer">
      <div className="tempInOneHour"><p>03:00</p><p><img src={mostlycloudy}></img></p><p>19°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={mostlycloudy}></img></p><p>4°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>9°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>6°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>6°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>9°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={clear}></img></p><p>3°C</p></div>
      <div className="tempInOneHour"><p>03:00</p><p><img src={mostlycloudy}></img></p><p>9°C</p></div>
      </div>
    </div>
  );
}

export default App;
