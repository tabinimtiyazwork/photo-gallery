import React from "react";
import { HiOutlineDownload, HiOutlineArrowsExpand } from "react-icons/hi";

function LargeScreenCard({ image, placeholder, index }) {
  return (
    <div key={index} className="relative group">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover"
        onError={(e) => {
          e.target.src = placeholder;
        }}
      />
      {/* Combined overlay, logo, and icons container */}
      <div className="absolute inset-0 flex justify-between items-start p-2 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 cursor-zoom-in">
        {/* Top-left logo */}
        <div className="flex items-center ml-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="/src/assets/images/placeholder-image.jpg" // Use a profile placeholder image
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold text-white">Faisal Kashmire</p>
          </div>
        </div>

        {/* Top-right buttons */}
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="text-black bg-white p-1.5 rounded hover:bg-opacity-80">
            <HiOutlineArrowsExpand />
          </button>
          <button className="text-black bg-white p-1.5 rounded hover:bg-opacity-80">
            <HiOutlineDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LargeScreenCard;
