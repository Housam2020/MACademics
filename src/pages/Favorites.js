import React, { useState } from "react";
import StudyPlaceCard from "../components/StudyPlaceCard";
import studySpots from "../data/studySpots";
import Modal from "../components/Modal";

const Favorites = () => {
  const [activeTab, setActiveTab] = useState("favorites");
  const [favorites, setFavorites] = useState(studySpots.filter(place => place.name.includes("Silent Zone")));
  const [visited, setVisited] = useState([
    studySpots.find(place => place.id === 1),
    studySpots.find(place => place.id === 3)
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(studySpots[0]);

  const placesToShow = activeTab === "favorites" ? favorites : visited;

  const handleAddFavorite = (e) => {
    e.preventDefault();
    setFavorites([...favorites, selectedPlace]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Places</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded ${activeTab === "favorites" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
        <button
          className={`py-2 px-4 rounded ${activeTab === "visited" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("visited")}
        >
          Visited
        </button>
      </div>

      {/* Conditionally Render Add New Favorite Button */}
      {activeTab === "favorites" && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-6"
        >
          Add New Favorite
        </button>
      )}

      {/* List of Places */}
      {placesToShow.map((place, index) => (
        <StudyPlaceCard key={index} place={place} />
      ))}

      {/* Add Favorite Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Add a New Favorite</h2>
          <form onSubmit={handleAddFavorite}>
            <div className="mb-4">
              <label className="block text-gray-700">Select Place</label>
              <select
                value={selectedPlace.id}
                onChange={(e) => setSelectedPlace(studySpots.find(place => place.id === parseInt(e.target.value)))}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                {studySpots.map((place) => (
                  <option key={place.id} value={place.id}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Add Favorite
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Favorites;