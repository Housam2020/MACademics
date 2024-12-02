import React from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Home = () => {
  const studyPlaces = [
    {
      name: "Library - Quiet Zone",
      description: "Perfect for deep focus and studying alone.",
      noiseLevel: "Quiet",
      proximityToFood: "Moderate",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Campus Cafe",
      description: "Lively environment with great coffee options.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {studyPlaces.map((place, index) => (
        <StudyPlaceCard key={index} place={place} />
      ))}
    </div>
  );
};

export default Home;
