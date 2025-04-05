import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function FrankiesCafe() {
  return (
    <div className="page-container">
      <h2>Frankies Cafe</h2>
      <p>Serving coffee and treats for studying.</p>
      <Review location="FrankiesCafe" />
      <Link to="/university-library">Back to University Library</Link>
    </div>
  );
}

export default FrankiesCafe;
