import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function SlimChicken() {
  return (
    <div className="page-container">
      <h2>Slim Chicken</h2>
      <p>Southern-style chicken meals made fresh.</p>
      <Review location="Slim Chicken" />
      <Link to="/student-center">Back to Oakland Center</Link>
    </div>
  );
}

export default SlimChicken;
