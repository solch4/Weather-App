import React from "react";
// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import About from "./About.js";
import "../styles/Nav.css";

export default function Nav({ onSearch }) { //recibe una func onSearch(cityname)
  return (
    <nav className="navbar">
      <div className="container">
        <div className="title">
          <span>Weather App</span>
        </div>
        <div className="aboutme">
          <About />
        </div>
        <div className="searchbar">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
