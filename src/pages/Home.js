import React, { useMemo, useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Home = () => {
  const studyPlaces = useMemo(() => [
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
    {
      name: "Outdoor Patio",
      description: "A refreshing outdoor environment for collaborative work.",
      noiseLevel: "Moderate",
      proximityToFood: "Close",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Study Hall",
      description: "Spacious hall with individual desks.",
      noiseLevel: "Quiet",
      proximityToFood: "Far",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Library - Group Study",
      description: "Ideal for group discussions and collaborative work.",
      noiseLevel: "Moderate",
      proximityToFood: "Moderate",
      image: "https://via.placeholder.com/300x200",
    },
  ], []);

  const [filteredPlaces, setFilteredPlaces] = useState(studyPlaces);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bgColor, setBgColor] = useState("bg-gray-100");

  const filterByCategory = (category, color) => {
    setSelectedCategory(category);
    setBgColor(color);

    if (category === "All") {
      setFilteredPlaces(studyPlaces);
    } else if (category === "Quiet") {
      setFilteredPlaces(studyPlaces.filter(place => place.noiseLevel === "Quiet"));
    } else if (category === "Outdoor") {
      setFilteredPlaces(studyPlaces.filter(place => place.name.includes("Outdoor")));
    } else if (category === "Close to Food") {
      setFilteredPlaces(studyPlaces.filter(place => place.proximityToFood === "Close"));
    } else if (category === "Collaborative") {
      setFilteredPlaces(studyPlaces.filter(place => place.name.includes("Group") || place.name.includes("Collaborative")));
    }
  };

  const buttonClass = "text-white p-4 rounded-lg shadow-md w-full h-20 flex items-center justify-center";

  return (
    <div className={`p-4 ${bgColor}`}>
      <h1 className="text-3xl font-bold mb-4">Welcome to Campus Spaces</h1>

      {/* Featured Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Featured Study Place</h2>
        <StudyPlaceCard place={studyPlaces[0]} />
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => filterByCategory("Quiet", "bg-blue-100")}
            className={`bg-blue-500 ${buttonClass}`}
          >
            <p className="text-lg font-medium">Quiet Places</p>
          </button>
          <button
            onClick={() => filterByCategory("Outdoor", "bg-green-100")}
            className={`bg-green-500 ${buttonClass}`}
          >
            <p className="text-lg font-medium">Outdoor Spaces</p>
          </button>
          <button
            onClick={() => filterByCategory("Close to Food", "bg-yellow-100")}
            className={`bg-yellow-500 ${buttonClass}`}
          >
            <p className="text-lg font-medium">Close to Food</p>
          </button>
          <button
            onClick={() => filterByCategory("Collaborative", "bg-purple-100")}
            className={`bg-purple-500 ${buttonClass}`}
          >
            <p className="text-lg font-medium">Collaborative Areas</p>
          </button>
          <button
            onClick={() => filterByCategory("All", "bg-gray-100")}
            className={`bg-gray-500 ${buttonClass} col-span-2`}
          >
            <p className="text-lg font-medium">Show All</p>
          </button>
        </div>

        {/* Selected Category */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Selected Category: {selectedCategory}</h3>
        </div>

        {/* Filtered Study Places */}
        <div className="grid grid-cols-1 gap-4">
          {filteredPlaces.map((place, index) => (
            <StudyPlaceCard key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;