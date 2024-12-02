import React from "react";

const StudyPlaceCard = ({ place }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{place.name}</h2>
        <p className="text-gray-600 text-sm">{place.description}</p>
        <div className="flex items-center mt-3">
          <span className="material-icons text-blue-500 text-lg">volume_up</span>
          <span className="ml-2 text-gray-700 text-sm">
            {place.noiseLevel}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="material-icons text-green-500 text-lg">
            restaurant
          </span>
          <span className="ml-2 text-gray-700 text-sm">
            {place.proximityToFood}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudyPlaceCard;
