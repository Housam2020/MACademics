import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [noiseLevel, setNoiseLevel] = useState("");
  const [proximityToFood, setProximityToFood] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, { noiseLevel, proximityToFood });
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div>
        <label className="block text-gray-700">Search</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Noise Level</label>
        <select
          value={noiseLevel}
          onChange={(e) => setNoiseLevel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Any</option>
          <option value="Quiet">Quiet</option>
          <option value="Moderate">Moderate</option>
          <option value="Loud">Loud</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Proximity to Food</label>
        <select
          value={proximityToFood}
          onChange={(e) => setProximityToFood(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Any</option>
          <option value="Close">Close</option>
          <option value="Far">Far</option>
        </select>
      </div>
      <button type="submit" className="bg-primary text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchFilter;