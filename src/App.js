import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recommendations from "./pages/Recommendations";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import StudyPlaceDetails from "./pages/StudyPlaceDetails";
import Navbar from "./components/Navbar";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Top Navbar */}
        <TopNavBar />

        {/* Main Content */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/study-place/:id" element={<StudyPlaceDetails />} />
          </Routes>
        </div>

        {/* Bottom Navbar */}
        <Navbar />
      </div>
    </Router>
  );
};

export default App;