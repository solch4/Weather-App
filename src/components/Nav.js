import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import "../styles/Nav.css";

export default function Nav({ onSearch }) { //recibe una func onSearch(cityname)
  return (
    <nav className="navbar">
      <div className="container">
      <Link className="title" to='/'>
        <div>
          <span>Weather App</span>
        </div>
      </Link>
      <span className="about">
        <Link to='/about'>
          About
        </Link>
      </span>
        <div className="searchbar">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
