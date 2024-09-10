import React from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi"; // Importing the view icon from Heroicons

function MobileScreenCard({ image, placeholder, onClickView }) {
  return (
    <div className="relative group my-3">
      {/* Top profile */}
      <div className="flex items-center ml-2 mb-4">
        <img
          src={image.profile.logo} // Access profile logo from image object
          className="w-8 h-8 rounded-full"
          alt="Profile"
        />
        <div className="ml-2">
          <p className="text-sm font-semibold text-white">
            {image.profile.name}
          </p>
        </div>
      </div>

      {/* Image */}
      <img
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
          <a
            href={image.src}
            download
            className="text-gray-800 bg-white opacity-80 px-2.5 py-1 rounded"
          >
            Download
          </a>
          <button
            onClick={onClickView}
            className="text-gray-800 bg-white px-2.5 opacity-80 py-1 rounded"
          >
            <HiOutlineArrowsExpand />
          </button>
        </div>
        {/* Description
        <p className="text-sm text-navbar-text mt-3">{image.description}</p> */}
      </div>
    </div>
  );
}

export default MobileScreenCard;
