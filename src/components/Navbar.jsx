import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-opacity-5 text-white py-4 px-20 fixed top-0 w-full z-20">
      <ul className="flex justify-start space-x-10">
        <li>
          <Link to="/" className="nav-link-hover">
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="nav-link-hover">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link-hover">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
