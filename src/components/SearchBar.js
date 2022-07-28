import React, { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('') //[var con el estado, function q permite setear city]

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        className="searchInput"
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <button className="searchBtn" type="submit">Add</button>
    </form>
  );
}
