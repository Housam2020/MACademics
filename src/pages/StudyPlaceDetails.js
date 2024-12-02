import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";

const StudyPlaceDetails = ({ place }) => {
  const [visited, setVisited] = useState(false);

  if (!place) {
    return <div>Study place not found</div>;
  }

  const handleVisitedClick = () => {
    setVisited(!visited);
  };

  const similarPlaces = studySpots.filter(
    p => p.noiseLevel === place.noiseLevel && p.id !== place.id
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
      <img src={place.image} alt={place.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
      
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="text-gray-700 mb-2"><strong>Description:</strong> {place.description}</p>
        <p className="text-gray-700 mb-2"><strong>Noise Level:</strong> {place.noiseLevel}</p>
        <p className="text-gray-700 mb-2"><strong>Proximity to Food:</strong> {place.proximityToFood}</p>
        <p className="text-gray-700 mb-2"><strong>Accessibility:</strong> {place.accessibility}</p>
        <p className="text-gray-700 mb-2"><strong>Outlets:</strong> {place.outlets}</p>
      </div>

      <button
        onClick={handleVisitedClick}
        className={`px-4 py-2 rounded mb-4 ${visited ? "bg-green-500 text-white" : "bg-gray-200"}`}
      >
        {visited ? "Mark as Not Visited" : "Mark as Visited"}
      </button>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Reviews</h2>
      <div className="space-y-4">
        {place.reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
            <p className="font-bold">{review.user}</p>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Similar Places</h2>
      <div className="grid grid-cols-1 gap-4">
        {similarPlaces.map((p, index) => (
          <StudyPlaceCard key={index} place={p} />
        ))}
      </div>
    </div>
  );
};

export default StudyPlaceDetails;