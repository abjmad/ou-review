import React from "react";
import { Link } from "react-router-dom";
import Review from "../../components/Review";
import "../PageStyles.css";

function GrizzlyStreetSubs() {
  return (
    <div className="page-container">
      <h2>Grizzly Street Subs</h2>
      <p>Delicious fresh subs available daily.</p>
      {/* Include the Review component and pass the location name */}
      <Review location="Grizzly Street Subs" />
      <Link to="/student-center">Back to Oakland Center</Link>
    </div>
  );
}

export default GrizzlyStreetSubs;
