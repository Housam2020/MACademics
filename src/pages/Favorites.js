import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Favorites = () => {
  const [activeTab, setActiveTab] = useState("favorites");

  const favorites = [
    {
      name: "Library - Silent Zone",
      description: "A peaceful spot for individual study.",
      noiseLevel: "Quiet",
      proximityToFood: "Far",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const visited = [
    {
      name: "Outdoor Patio",
      description: "Great for group discussions.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const placesToShow = activeTab === "favorites" ? favorites : visited;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Places</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded ${
            activeTab === "favorites" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeTab === "visited" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("visited")}
        >
          Visited
        </button>
      </div>

      {/* List of Places */}
      {placesToShow.map((place, index) => (
        <StudyPlaceCard key={index} place={place} />
      ))}
    </div>
  );
};

export default Favorites;
