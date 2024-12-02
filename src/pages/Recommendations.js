import React from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Recommendations = () => {
  const recommendations = [
    {
      name: "Sunny Lounge",
      description: "Bright spot for relaxing study sessions.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Quiet Garden",
      description: "Serene outdoor area for focus.",
      noiseLevel: "Quiet",
      proximityToFood: "Far",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recommended for You</h1>

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
