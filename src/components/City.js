import React from "react";
import { Link } from "react-router-dom";
import "../styles/City.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function City({ city }) {
  if (!city) {
    MySwal.fire({
      icon: "error",
      title: "This city is not in the list",
      color: "hsl(0, 6%, 24%)",
      confirmButtonText: "Ok",
      confirmButtonColor: "hsl(0, 74%, 74%)",
      iconColor: 'hsl(0, 74%, 74%)',
    });
    return <div>This city is not in the list.</div>;
  }

  return (
    <div className="city-container">
      <Link className="backBtn-container" to="/">
        <button className="backBtn">
          <i class="uil uil-arrow-left"></i>
        </button>
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
