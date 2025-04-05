import React from "react";
import Review from "../../components/Review";
import { Link } from "react-router-dom";
import "../PageStyles.css";

function PandaExpress() {
  return (
    <div className="page-container">
      <h2>Panda Express</h2>
      <p>Enjoy freshly made Chinese cusine.</p>
      <Review location="Panda Express" />
      <Link to="/student-center">Back to Oakland Center</Link>
    </div>
  );
}

export default PandaExpress;
