import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function OaklandHallCafe() {
  return (
    <div className="page-container">
      <h2>Oakland Hall Cafe</h2>
      <p>Enjoy coffee on the go.</p>
      <Review location="Oakland Hall Cafe" />
      <Link to="/oakland-hall">Back to Oak View Hall</Link>
    </div>
  );
}

export default OaklandHallCafe;
