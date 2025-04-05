// src/pages/StudentCenter.js
import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

/**
 * StudentCenter component displays information about the Student Center
 * and links to its restaurants.
 * @returns {JSX.Element} The rendered StudentCenter component.
 */
function StudentCenter() {
  return (
    <div className="page-container">
      <h2>
        Oakland Center</h2>
      <p>Welcome to the Oakland Center, the hub of campus activities.</p>
      <h3>Restaurants</h3>
      <ul className="location-list">
        <li>
          <Link to="/grizzly-street-subs">Grizzly Street Subs</Link>
        </li>
        <li>
          <Link to="/slim-chicken">Slim Chicken</Link>
        </li>
        <li>
          <Link to="/the-halal-shack">The Halal Shack</Link>
        </li>
        <li>
          <Link to="/panda-express">Panda Express</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentCenter;
