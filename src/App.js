import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Cards from './components/Cards.js'
import About from './components/About.js'
import City from './components/City.js'
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  function onSearch(city) {
    if (!city) alert('Please, write the name of the city you want to find.')
    else {
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
            //more details for the City component:
            weatherDescription: resource.weather[0].description,
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            pressure: resource.main.pressure,
            humidity: resource.main.humidity,
            visibility: (resource.visibility)/1000,
            wind: resource.wind.speed,
            clouds: resource.clouds.all,
          };
          setCities([...cities, ciudad]);
        } else alert("City not found.")
      });
    }
  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) return ciudad[0]
    else return null
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />} />
      <Route exact path="/about" render={()=><About/>}/>
      <Route path={"/city/:cityId"} render={({match})=><City city={onFilter(match.params.cityId)}/>}/>
    </div>
  );
}

export default App;
