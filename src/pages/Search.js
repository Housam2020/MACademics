import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query, filters) => {
    console.log("Search Query:", query);
    console.log("Filters:", filters);

    // Filter studySpots based on query and filters
    const filteredResults = studySpots.filter(place => {
      return (
        place.name.toLowerCase().includes(query.toLowerCase()) &&
        (filters.noiseLevel ? place.noiseLevel === filters.noiseLevel : true) &&
        (filters.proximityToFood ? place.proximityToFood === filters.proximityToFood : true)
      );
    });

    setResults(filteredResults);
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