import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Favorites = () => {
  const [favorites] = useState([
    {
      name: "Silent Study Room",
      description: "A perfect place for individual study with no distractions.",
      noiseLevel: "Quiet",
      proximityToFood: "Far",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  const [visited] = useState([
    {
      name: "Outdoor Patio",
      description: "A great spot for group discussions and fresh air.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Favorite Places</h2>
        {favorites.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Visited Places</h2>
        {visited.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
