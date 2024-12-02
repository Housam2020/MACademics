import React from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Recommendations = () => {
  const recommendations = [
    {
      name: "Sunny Lounge",
      description: "Bright and cheerful spot for relaxed studying.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Garden Tables",
      description: "Enjoy fresh air while you work.",
      noiseLevel: "Quiet",
      proximityToFood: "Far",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recommendations</h1>
      {recommendations.map((place, index) => (
        <StudyPlaceCard key={index} place={place} />
      ))}
    </div>
  );
};

export default Recommendations;
