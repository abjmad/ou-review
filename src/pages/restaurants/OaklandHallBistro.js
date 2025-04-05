import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function OaklandHallBistro() {
  return (
    <div className="page-container">
      <h2>Oakland Hall Bistro</h2>
      <p>Delicious meals for a pick me up.</p>
      <Review location="Oakland Hall Bistro" />
      <Link to="/okland-hall">Back to Oakland Hall</Link>
    </div>
  );
}

export default OaklandHallBistro;
