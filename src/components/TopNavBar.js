import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";

const TopNavBar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlace, setNewPlace] = useState({
    name: "",
    description: "",
    image: "",
    noiseLevel: "",
    proximityToFood: "",
    accessibility: "",
    outlets: "",
  });

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Campus Spaces";
      case "/search":
        return "Search";
      case "/favorites":
        return "Favorites";
      case "/recommendations":
        return "Recommendations";
      case "/reviews":
        return "Reviews";
      case "/account-settings":
        return "Account Settings";
      default:
        return "Campus Spaces";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlace((prevPlace) => ({
      ...prevPlace,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log("New Place Submitted:", newPlace);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">{getTitle()}</h1>
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-2xl mr-4"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <Link to="/account-settings">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </Link>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Submit a New Place</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newPlace.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={newPlace.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={newPlace.image}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Noise Level</label>
            <select
              name="noiseLevel"
              value={newPlace.noiseLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Noise Level</option>
              <option value="Quiet">Quiet</option>
              <option value="Moderate">Moderate</option>
              <option value="Loud">Loud</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Proximity to Food</label>
            <select
              name="proximityToFood"
              value={newPlace.proximityToFood}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Proximity to Food</option>
              <option value="Close">Close</option>
              <option value="Moderate">Moderate</option>
              <option value="Far">Far</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Accessibility</label>
            <input
              type="text"
              name="accessibility"
              value={newPlace.accessibility}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Outlets</label>
            <input
              type="text"
              name="outlets"
              value={newPlace.outlets}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
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
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default TopNavBar;