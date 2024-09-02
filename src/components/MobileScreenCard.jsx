import React from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi"; // Importing the view icon from Heroicons

function MobileScreenCard({ image, placeholder, index }) {
  return (
    <div className="relative group my-3">
      {/* Top profile */}
      <div className="flex items-center ml-2 mb-4">
        <img
          src="/src/assets/images/placeholder-image.jpg" // Use a profile placeholder image
          className="w-8 h-8 rounded-full"
          alt="Profile"
        />
        <div className="ml-2">
          <p className="text-sm font-semibold text-white">Faisal Kashmire</p>
        </div>
      </div>

      {/* Image */}
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover"
        onError={(e) => {
          e.target.src = placeholder;
        }}
      />

      {/* Download and View buttons */}
      <div className="flex flex-col mt-3 px-3 gap-1">
        <div className="flex justify-between">
          <button className="text-gray-800 bg-white opacity-80 px-2.5 py-1 rounded">
            Download
          </button>
          <button className="text-gray-800 bg-white px-2.5 opacity-80 py-1 rounded">
            <HiOutlineArrowsExpand />
          </button>
        </div>
        {/* Description */}
        <p className="text-sm text-navbar-text mt-3">
          This is a description of the image. It provides some context or
          background for the photo.
        </p>
      </div>
    </div>
  );
}

export default MobileScreenCard;
