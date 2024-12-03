import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";
import PageTitle from "../components/PageTitle";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    studySpots.find(place => place.id === 1),
    studySpots.find(place => place.id === 3)
  ]);

  const [visited, setVisited] = useState([
    studySpots.find(place => place.id === 2),
    studySpots.find(place => place.id === 4)
  ]);

  const [activeTab, setActiveTab] = useState('favorites');

  return (
    <div className="p-4">
      <PageTitle>Favorites</PageTitle>
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 px-4 ${activeTab === 'favorites' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </button>
        <button
          className={`flex-1 py-2 px-4 ${activeTab === 'visited' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('visited')}
        >
          Visited
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {activeTab === 'favorites' && favorites.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
        {activeTab === 'visited' && visited.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;