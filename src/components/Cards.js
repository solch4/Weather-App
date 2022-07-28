import React from "react";
import Card from "./Card.js";
import "../styles/Cards.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className="cardsContainer">
        {cities.map((c) => (
          <Card
            name={c.name}
            temp={c.temp}
            feels_like={c.feels_like}
            weatherMain={c.weatherMain}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
