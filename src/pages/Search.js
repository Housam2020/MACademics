// Search.js
import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import StudyPlaceCard from "../components/StudyPlaceCard";

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query, filters) => {
    console.log("Search Query:", query);
    console.log("Filters:", filters);

    // Example mock data for search results
    const mockResults = [
      {
        name: "Quiet Library",
        description: "Ideal for uninterrupted focus.",
        noiseLevel: "Quiet",
        proximityToFood: "Moderate",
        image: "https://via.placeholder.com/300x200",
      },
    ];
    setResults(mockResults);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <SearchFilter onSearch={handleSearch} />
      <div className="mt-4">
        {results.map((place, index) => (
          <StudyPlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Search;
