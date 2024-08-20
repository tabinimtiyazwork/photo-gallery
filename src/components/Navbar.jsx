import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-5 z-1">
      <ul className="flex justify-center gap-10 text-black font-light">
        <li className="nav-link-hover">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link-hover">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-link-hover">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
