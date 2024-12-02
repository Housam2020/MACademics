import React from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";
import PageTitle from "../components/PageTitle";

const Recommendations = () => {
  const recommendations = studySpots.filter(place => place.noiseLevel === "Moderate");

  return (
    <div className="p-4">
      <PageTitle>Recommended for You</PageTitle>

      {/* Recommendation Cards */}
      {recommendations.map((place, index) => (
        <StudyPlaceCard key={index} place={place} />
      ))}

      {/* Explore CTA */}
      <div className="mt-6 text-center">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Explore More Places
        </button>
      </div>
    </div>
  );
};

export default Recommendations;