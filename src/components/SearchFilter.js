import React from "react";
import SearchFilter from "../components/SearchFilter";

const Search = () => {
  const handleSearch = (query, filters) => {
    console.log("Search Query:", query);
    console.log("Filters:", filters);
    // Implement search logic here
  };

  return (
    <div className="p-4">
      <SearchFilter onSearch={handleSearch} />
    </div>
  );
};

export default Search;
