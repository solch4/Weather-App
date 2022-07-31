import React from "react";
import { Link } from "react-router-dom";
import "../styles/City.css";

export default function City({ city }) {
  if (!city) {
    alert("This city is not in the list.");
    return <div>This city is not in the list.</div>;
  }

  return (
    <div className="city-container">
      <Link className="backBtn-container" to="/">
        <button className="backBtn">↩</button>
      </Link>
      <div className="city">
        <h2>{city.name}</h2>
        <img
          className="icon"
          src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
          width="80"
          height="80"
          alt=""
        />
        <div className="city-info">
          <div className="city-column1">
            <p>Temperature: {city.temp}º C</p>
            <p>Feels like: {city.feels_like}º C</p>
            <p>Weather description: {city.weatherDescription}</p>
            <p>Min: {city.min}º C</p>
            <p>Max: {city.max}º C</p>
          </div>
          <div className="city-column2">
            <p>Pressure: {city.pressure} hPa</p>
            <p>Humidity: {city.humidity}%</p>
            <p>Visibility: {city.visibility} km</p>
            <p>Wind: {city.wind} m/s</p>
            <p>Clouds: {city.clouds}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
