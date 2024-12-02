import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import StudyPlaceDetails from "./pages/StudyPlaceDetails";
import AccountSettings from "./pages/AccountSettings";
import Maps from "./pages/Maps";
import Navbar from "./components/Navbar";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <TopNavBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/study-place/:id" element={<StudyPlaceDetails />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;