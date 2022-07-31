import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/SearchBar.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  const history = useHistory();

  const handleClick = () => city ? history.push("/") : null

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
      <button className="searchBtn" type="submit" onClick={handleClick}>Add</button>
    </form>
  );
}
