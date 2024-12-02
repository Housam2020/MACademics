import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faHeart, faStar, faMap } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const baseClass =
    "flex flex-col items-center text-sm font-medium transition-all duration-300";
  const activeClass = "text-accent";
  const inactiveClass = "text-gray-400 hover:text-gray-200";

  return (
    <nav className="bg-gray-900 shadow-lg fixed bottom-0 w-full flex justify-around px-6 py-3 border-t border-gray-700">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FontAwesomeIcon icon={faHome} className="text-2xl" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FontAwesomeIcon icon={faSearch} className="text-2xl" />
        <span>Search</span>
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FontAwesomeIcon icon={faHeart} className="text-2xl" />
        <span>Favorites</span>
      </NavLink>

      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FontAwesomeIcon icon={faStar} className="text-2xl" />
        <span>Reviews</span>
      </NavLink>

      <NavLink
        to="/maps"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FontAwesomeIcon icon={faMap} className="text-2xl" />
        <span>Maps</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;