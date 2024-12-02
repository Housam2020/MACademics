import React, { useState } from "react";
import Modal from "./Modal";
import StudyPlaceDetails from "../pages/StudyPlaceDetails";

const noiseLevelEmojis = {
  Quiet: "🔇",
  Moderate: "🔉",
  Loud: "🔊"
};

const StudyPlaceCard = ({ place }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden mb-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{place.name}</h2>
          <p className="text-gray-600 text-sm">{place.description}</p>
          <div className="flex items-center mt-3">
            <span className="text-lg">{noiseLevelEmojis[place.noiseLevel]}</span>
            <span className="ml-2 text-gray-700 text-sm"><strong>Noise Level:</strong> {place.noiseLevel}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="material-icons text-green-500 text-lg">restaurant</span>
            <span className="ml-2 text-gray-700 text-sm"><strong>Food Proximity:</strong> {place.proximityToFood}</span>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <StudyPlaceDetails place={place} />
      </Modal>
    </>
  );
};

export default StudyPlaceCard;