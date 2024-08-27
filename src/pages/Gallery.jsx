import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import placeholder from "/src/assets/images/placeholder-image.jpg"; // Import your placeholder image

const images = [
  { src: "/src/assets/images/img1.jpg", alt: "Image 1 description" },
  { src: "/src/assets/images/img2.jpg", alt: "Image 2 description" },
  { src: "/src/assets/images/img3.jpg", alt: "Image 3 description" },
  { src: "/src/assets/images/img4.jpg", alt: "Image 4 description" },
  { src: "/src/assets/images/img5.jpg", alt: "Image 5 description" },
  { src: "/src/assets/images/img6.jpg", alt: "Image 6 description" },
  { src: "/src/assets/images/img7.jpg", alt: "Image 7 description" },
  { src: "/src/assets/images/img8.jpg", alt: "Image 8 description" },
  { src: "/src/assets/images/img10.jpg", alt: "Image 10 description" },
  { src: "/src/assets/images/img11.jpg", alt: "Image 11 description" },
  { src: "/src/assets/images/img12.jpg", alt: "Image 12 description" },
  { src: "/src/assets/images/img13.jpg", alt: "Image 13 description" },
  { src: "/src/assets/images/img14.jpg", alt: "Image 14 description" },
  { src: "/src/assets/images/img15.jpg", alt: "Image 15 description" },
  { src: "/src/assets/images/img16.jpg", alt: "Image 16 description" },
  { src: "/src/assets/images/img17.jpg", alt: "Image 17 description" },
  { src: "/src/assets/images/img18.jpg", alt: "Image 18 description" },
];

function Gallery() {
  return (
    <BackgroundWrapper>
      <Navbar />
      <div className="pt-20 pb-5 sm:mx-5 lg:mx-10 xl:mx-30 min-h-[94vh]">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            900: 3,
          }}
        >
          <Masonry gutter="30px">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                onError={(e) => {
                  e.target.src = placeholder;
                }} // Fallback to placeholder
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </BackgroundWrapper>
  );
}

export default Gallery;
