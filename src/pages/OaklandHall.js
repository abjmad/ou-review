// src/pages/OaklandHall.js
import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

/**
 * OaklandHall component displays information about Oakland Hall
 * and links to its dining options.
 * @returns {JSX.Element} The rendered OaklandHall component.
 */
function OaklandHall() {
  return (
    <div className="page-container">
      <h2>Oak View Hall</h2>
      <p>Experience vibrant campus life at Oak View Hall.</p>
      <h3>Dining Options</h3>
      <ul className="location-list">
        <li>
          <Link to="/oakland-hall-cafe">Oak View Hall Cafe</Link>
        </li>
        <li>
          <Link to="/oakland-hall-bistro">Oak View Hall Bistro</Link>
        </li>
      </ul>
    </div>
  );
}

export default OaklandHall;
