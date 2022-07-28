import React, {useState} from 'react';
// import { Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Card from './components/Card.js';
import Cards from './components/Cards.js'
import About from './components/About.js'
import City from './components/City.js'
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const ciudad = {
            id: resource.id,
            name: resource.name,
            temp: Math.round(resource.main.temp),
            feels_like: Math.round(resource.main.feels_like),
            weatherMain: resource.weather[0].main,
            img: resource.weather[0].icon,

            lat: resource.coord.lat,
            lon: resource.coord.lon,
            weatherDescription: resource.weather[0].description,
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            humidity: resource.main.humidity,
            wind: resource.wind.speed,
            clouds: resource.clouds.all,
            timezone: resource.timezone
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}

export default App;
