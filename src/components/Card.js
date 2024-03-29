import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ name, temp, feels_like, weatherMain, img, onClose, id }) {
  return (
    <div className="cardContainer">
      <button className="closeBtn" onClick={onClose}>
        X
      </button>
      <Link to={`/city/${id}`}>
        <h5 className="card-title">{name}</h5>
        <div className="card-body">
          <div className="card-temp">
            <p>Temp {temp}°</p>
            <p>Feels like {feels_like}°</p>
          </div>
          <div>
            <img
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
            <p>{weatherMain}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
