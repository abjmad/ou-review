import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function TheHalalShack() {
  return (
    <div className="page-container">
      <h2>The Halal Shack</h2>
      <p>Serving fresh Mediterranean-inspired dishes.</p>
      <Review location="The Halal Shack" />
      <Link to="/student-center">Back to Oakland Center</Link>
    </div>
  );
}

export default TheHalalShack;
