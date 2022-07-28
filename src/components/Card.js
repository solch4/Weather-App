import React from "react";
import "../styles/Card.css";

export default function Card({
  name,
  temp,
  feels_like,
  weatherMain,
  img,
  onClose,
  id,
}) {
  return (
    <div className="cardContainer">
      <button className="closeBtn" onClick={onClose}>
        X
      </button>
      <h5 className="card-title">{name}</h5>
      <div className="card-body">
        <div className="card-temp">
          <p className="temp">Temp {temp}°</p>
          <p className="feels_like">Feels like {feels_like}°</p>
        </div>{/* card-temp */}
        <div className="card-weather">
          <img
            className="icon"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
          <p className="weatherMain">{weatherMain}</p>
        </div>{/* card-temp */}
      </div>{/* card-body */}
    </div>
  );
}
