import React, { useState } from "react";
import studySpots from "../data/studySpots";
import PageTitle from "../components/PageTitle";
import StudyPlaceCard from "../components/StudyPlaceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import StudyPlaceMarker from "../components/StudyPlaceMarker";

const Maps = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="p-4">
      <PageTitle>Study Places Nearby</PageTitle>
      <div className="relative mt-6 h-screen">
        <img
          src="/explore-map.jpg"
          alt="Map showing study places"
          className="w-full h-full object-cover rounded-lg"
        />
        <StudyPlaceMarker
          place={studySpots.find(spot => spot.id === 2)}
          top="50%"
          left="20%"
          color="blue"
        />
        <StudyPlaceMarker
          place={studySpots.find(spot => spot.id === 8)}
          top="52%"
          left="80%"
          color="yellow"
        />
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: '50%', left: '50%' }}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-green-500 text-6xl cursor-pointer"
            title="Your Location"
          />
        </div>
      </div>
      {selectedPlace && (
        <div className="mt-6">
          <StudyPlaceCard place={selectedPlace} />
        </div>
      )}
    </div>
  );
};

export default Maps;