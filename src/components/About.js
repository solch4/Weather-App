import React from "react";
import { Link } from "react-router-dom";
import php from "../assets/php.png";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <Link className="backBtn-container" to="/">
        <button className="backBtn">
          <i className="uil uil-arrow-left"></i>
        </button>
      </Link>
      <div className="about-body">
        <h3>Sol Maldonado</h3>
        <h4>Front-End Web Developer</h4>
        <img className="php" alt="pic" src={php} />
        <p>
          Hi! My name is Sol and I'm from Tucumán, Argentina. I'm 19 years old
          and this year I started to learn about Full Stack Web Development in
          the&nbsp;
          <a href="https://www.soyhenry.com/" target="_blank" rel="noreferrer">
            Henry
          </a>
          &nbsp;bootcamp. I've built this weather app as practice with ReactJS
          and pure CSS (without frameworks/libraries).
        </p>
        <p>
          Here is my&nbsp;
          <a href="https://linktr.ee/solch4" target="_blank" rel="noreferrer">
            Linktree
          </a>
          &nbsp;with my LinkedIn, GitHub and email!
        </p>
      </div>
    </div>
  );
}
