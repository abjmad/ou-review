// src/pages/UniversityLibrary.js
import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

/**
 * UniversityLibrary component displays information about the University Library
 * and provides a link to its café.
 * @returns {JSX.Element} The rendered UniversityLibrary component.
 */
function UniversityLibrary() {
  return (
    <div className="page-container">
      <h2>University Library</h2>
      <p>Discover a wide range of resources, study spaces, and digital media.</p>
      <h3>Cafés</h3>
      <ul className="location-list">
        <li>
          <Link to="/frankies-cafe">Frankie's Cafe</Link>
        </li>
      </ul>
    </div>
  );
}

export default UniversityLibrary;
