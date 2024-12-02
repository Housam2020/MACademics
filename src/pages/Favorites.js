import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";
import PageTitle from "../components/PageTitle";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    studySpots.find(place => place.id === 1),
    studySpots.find(place => place.id === 3)
  ]);

  return (
    <div className="p-4">
      <PageTitle>Favorites</PageTitle>
      <div className="grid grid-cols-1 gap-4">
        {favorites.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;