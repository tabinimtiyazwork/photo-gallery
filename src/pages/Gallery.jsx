import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  { src: "/src/assets/images/img1.jpg", alt: "Image 1 description" },
  { src: "/src/assets/images/img2.jpg", alt: "Image 2 description" },
  { src: "/src/assets/images/img3.jpg", alt: "Image 3 description" },
  { src: "/src/assets/images/img4.jpg", alt: "Image 4 description" },
  { src: "/src/assets/images/img5.jpg", alt: "Image 5 description" },
  { src: "/src/assets/images/img6.jpg", alt: "Image 6 description" },
  { src: "/src/assets/images/img7.jpg", alt: "Image 7 description" },
  { src: "/src/assets/images/img8.jpg", alt: "Image 8 description" },
  { src: "/src/assets/images/img9.jpg", alt: "Image 9 description" },
  // Add more images as needed
];

function Gallery() {
  return (
    <BackgroundWrapper>
      <Navbar />
      <div className="flex-col mx-auto py-10 pt-24 min-h-[95vh]">
        <h1 className="text-3xl font-thin text-center text-white mb-8">
          Photo Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </BackgroundWrapper>
  );
}

export default Gallery;
