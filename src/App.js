import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import Recommendations from "./pages/Recommendations";
import StudyPlaceDetails from "./pages/StudyPlaceDetails";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/study-place/:id" element={<StudyPlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;