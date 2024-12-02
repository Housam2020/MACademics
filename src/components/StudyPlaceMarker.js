import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import StudyPlaceDetails from "../pages/StudyPlaceDetails";

const StudyPlaceMarker = ({ place, top, left, color }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="absolute"
        style={{ top, left }}
        onClick={handleMarkerClick}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className={`text-${color}-500 text-5xl cursor-pointer`}
          title={place.name}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <StudyPlaceDetails place={place} />
      </Modal>
    </>
  );
};

export default StudyPlaceMarker;