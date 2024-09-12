import React, { useState, useEffect } from "react";
import { HiOutlineShare, HiOutlineX } from "react-icons/hi";

function ImageModal({ image, isOpen, onClose, ...rest }) {
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom-in and out

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll

      // Push new state into the browser history when modal is opened
      window.history.pushState({ modalOpen: true }, "");

      // Listen to the back button press event (popstate)
      window.onpopstate = () => {
        onClose(); // Close modal on back button press
        setIsZoomed(false);
      };
    } else {
      document.body.style.overflow = ""; // Enable body scroll

      // Reset the popstate listener when modal is closed
      window.onpopstate = null;
    }

    return () => {
      // Cleanup when component unmounts
      document.body.style.overflow = ""; // Clean up body scroll
      window.onpopstate = null; // Remove listener
    };
  }, [isOpen, onClose]);

  // Click handler for closing modal when clicking outside
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setIsZoomed(false);
    }
  };

  if (!isOpen) return null;

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed); // Toggle zoom state
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-backdrop-color bg-opacity-80 flex items-center justify-center cursor-zoom-out"
      onClick={handleClickOutside} // Add this click event
    >
      {/* Modal content with scroll behavior */}
      <div
        className={`relative w-full ${
          isZoomed
            ? "max-w-full max-h-full bg-opacity-0 p-0 m-0 sm:p-0 sm:m-0"
            : "sm:max-w-[80vw] max-h-[80vh] sm:max-h-[95vh]"
        } bg-primary-bg sm:p-6 shadow-lg rounded-xl overflow-y-auto no-scrollbar`}
        onClick={(e) => e.stopPropagation()} // Stop click event propagation
      >
        {/* Close Button */}
        <button
          className={`${
            isZoomed ? "hidden" : "absolute"
          } top-1 right-1 text-text-main text-2xl hover:text-text-muted`}
          onClick={onClose}
        >
          <HiOutlineX />
        </button>

        {/* Profile Section */}
        {!isZoomed && (
          <div className="flex items-center justify-between mb-6 mt-10 sm:mt-6 mx-3 sm:mx-0">
            <div className="flex items-center">
              <img
                src={image.profile.logo}
                alt="Profile Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-text-main text-xs sm:text-sm font-semibold">
                  {image.profile.name}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href={image.src}
                download
                className="text-black bg-button-primary text-xs sm:text-sm px-1 py-1 sm:px-3 sm:py-1 rounded hover:bg-opacity-80 transition-all duration-300 ease-in-out"
              >
                Download
              </a>
              <button className="text-black bg-white text-xs sm:text-sm px-1 py-1 sm:px-3 sm:py-1 rounded hover:bg-opacity-80 transition-all duration-300 ease-in-out">
                <HiOutlineShare className="inline-block text-sm mr-2" />
                Share
              </button>
            </div>
          </div>
        )}

        {/* Image Section */}
        <div className="flex justify-center my-4 sm:my-8 relative">
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className={`${
              isZoomed
                ? "w-full h-full object-contain cursor-zoom-out overflow-visible"
                : "lg:max-w-[100vw] max-h-[80vh] object-cover cursor-zoom-in"
            }`}
            {...rest}
            onClick={handleZoomToggle} // Click to zoom
          />
        </div>

        {/* Description Section */}
        {!isZoomed && (
          <div className="text-white text-sm mx-3 sm:mx-0 my-5 sm:my-0">
            <h3 className="text-lg font-semibold mb-4 text-text-main">
              Description
            </h3>
            <p className="mb-4">{image.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-muted">Shot with:</p>
                <p>{image.camera}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Published on:</p>
                <p>{image.publishDate}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">License:</p>
                <p>{image.license}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageModal;
