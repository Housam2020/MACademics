import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const TopNavBar = () => {
  const location = useLocation();

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

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">{getTitle()}</h1>
      <Link to="/account-settings">
        <FontAwesomeIcon icon={faUser} className="text-2xl" />
      </Link>
    </div>
  );
};

export default TopNavBar;