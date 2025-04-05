import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentCenter from "./pages/StudentCenter";
import UniversityLibrary from "./pages/UniversityLibrary";
import OaklandHall from "./pages/OaklandHall";
import GrizzlyStreetSubs from "./pages/restaurants/GrizzlyStreetSubs";
import SlimChicken from "./pages/restaurants/SlimChicken";
import TheHalalShack from "./pages/restaurants/TheHalalShack";
import PandaExpress from "./pages/restaurants/PandaExpress";
import FrankiesCafe from "./pages/restaurants/FrankiesCafe";
import OaklandHallBistro from "./pages/restaurants/OaklandHallBistro";
import OaklandHallCafe from "./pages/restaurants/OaklandHallCafe";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Oakland University Review</h1>
          <nav>
            <ul className="nav-list">
              <li><Link to="/student-center">Oakland Center</Link></li>
              <li><Link to="/university-library">University Library</Link></li>
              <li><Link to="/oakland-hall">Oak View Hall</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h2>Welcome to OU Review!</h2>} />
            <Route path="/student-center" element={<StudentCenter />} />
            <Route path="/university-library" element={<UniversityLibrary />} />
            <Route path="/oakland-hall" element={<OaklandHall />} />
            
            {/* Restaurant Pages */}
            <Route path="/grizzly-street-subs" element={<GrizzlyStreetSubs />} />
            <Route path="/slim-chicken" element={<SlimChicken />} />
            <Route path="/the-halal-shack" element={<TheHalalShack />} />
            <Route path="/panda-express" element={<PandaExpress />} />
            <Route path="/frankies-cafe" element={<FrankiesCafe />} />
            <Route path="/oakland-hall-bistro" element={<OaklandHallBistro />} />
            <Route path="/oakland-hall-cafe" element={<OaklandHallCafe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
