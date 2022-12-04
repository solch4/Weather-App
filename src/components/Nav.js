import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import "../styles/Nav.css";

export default function Nav({ onSearch }) { //recibe una func onSearch(cityname)
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <h2 className="title">Weather App</h2>
        </Link>
        <Link to="/about">
          <h4 className="about">About</h4>
        </Link>
        <div className="searchbar">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
