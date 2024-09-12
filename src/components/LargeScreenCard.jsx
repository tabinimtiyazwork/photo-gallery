import React, { useState } from "react";
import { HiOutlineDownload, HiOutlineArrowsExpand } from "react-icons/hi";
import "react-image-gallery/styles/css/image-gallery.css";

function LargeScreenCard({ image, placeholder, onClickView }) {
  return (
    <div className="relative group" onClick={onClickView}>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover"
        onError={(e) => {
          e.target.src = placeholder;
        }}
      />
      {/* Combined overlay, logo, and icons container */}
      <div className="absolute inset-0 flex justify-between items-start p-2 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 cursor-pointer">
        {/* Top-left logo */}
        <div className="flex items-center ml-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

        {/* Top-right buttons */}
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={onClickView}
            className="text-black bg-white p-1.5 rounded hover:bg-opacity-80"
          >
            <HiOutlineArrowsExpand />
          </button>
          <a
            href={image.src}
            download
            className="text-black bg-white p-1.5 rounded hover:bg-opacity-80"
          >
            <HiOutlineDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LargeScreenCard;
