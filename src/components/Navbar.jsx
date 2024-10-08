import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(); // Reference for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  // Close the mobile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white bg-opacity-5 backdrop-blur-md md:backdrop-blur-sm text-text-main py-3 max-sm:px-10 px-20 fixed top-0 w-full z-20">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          faisal
        </Link>

        <ul className="hidden md:flex justify-start space-x-10">
          <li>
            <Link
              to="/gallery"
              className={`nav-link-hover ${isActive("/gallery")}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link-hover ${isActive("/about")}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/social"
              className={`nav-link-hover ${isActive("/portfolio")}`}
            >
              Socials
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-text-main focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <ul className="flex flex-col space-y-2 px-4 pt-4 pb-2">
            <li>
              <Link to="/gallery" className="block py-2">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/social" className="block py-2">
                Socials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
