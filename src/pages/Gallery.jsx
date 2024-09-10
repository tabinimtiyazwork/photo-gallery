import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LargeScreenCard from "../components/LargeScreenCard";
import MobileScreenCard from "../components/MobileScreenCard";
import placeholder from "/src/assets/images/placeholder-image.jpg"; // Import your placeholder image
import ImageModal from "../components/ImageModal";

const images = [
  {
    src: "/src/assets/images/img1.jpg",
    alt: "Image 1 description",
    description:
      "A beautiful landscape shot at sunrise with mist over the mountains.",
    camera: "Canon 5D Mark IV",
    publishDate: "August 15, 2024",
    license: "Free to use under the Unsplash License",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img2.jpg",
    alt: "Image 2 description",
    description:
      "A serene beach during sunset, with soft waves lapping the shore.",
    camera: "Nikon D850",
    publishDate: "September 10, 2024",
    license: "Free for personal and commercial use",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img3.jpg",
    alt: "Image 3 description",
    description: "A dense forest trail captured in the early morning light.",
    camera: "Sony Alpha a7 III",
    publishDate: "July 20, 2024",
    license: "Creative Commons Attribution 4.0 International",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img4.jpg",
    alt: "Image 4 description",
    description: "A bustling cityscape at night with illuminated skyscrapers.",
    camera: "Fujifilm X-T4",
    publishDate: "August 5, 2024",
    license: "Royalty-free with attribution",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img5.jpg",
    alt: "Image 5 description",
    description: "A close-up of a vibrant flower blooming in the spring.",
    camera: "Canon EOS R6",
    publishDate: "September 1, 2024",
    license: "Free for personal and commercial use",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img6.jpg",
    alt: "Image 6 description",
    description:
      "A quiet lake reflecting the mountains under a clear blue sky.",
    camera: "Sony Alpha a6400",
    publishDate: "June 30, 2024",
    license: "Free to use under the Unsplash License",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img7.jpg",
    alt: "Image 7 description",
    description:
      "A wide-angle view of a desert with sand dunes at golden hour.",
    camera: "Nikon Z6",
    publishDate: "July 22, 2024",
    license: "Creative Commons Attribution 4.0 International",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img8.jpg",
    alt: "Image 8 description",
    description: "A snowy mountain peak under a starry night sky.",
    camera: "Panasonic Lumix S1",
    publishDate: "October 10, 2024",
    license: "Royalty-free with attribution",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img10.jpg",
    alt: "Image 10 description",
    description: "A waterfall flowing through a lush green forest.",
    camera: "Canon EOS M50",
    publishDate: "August 18, 2024",
    license: "Free for personal and commercial use",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img11.jpg",
    alt: "Image 11 description",
    description: "A majestic eagle soaring over a canyon.",
    camera: "Nikon D750",
    publishDate: "September 5, 2024",
    license: "Free to use under the Unsplash License",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img12.jpg",
    alt: "Image 12 description",
    description:
      "A street scene during a rainy evening with reflections on the road.",
    camera: "Sony RX100 VII",
    publishDate: "July 11, 2024",
    license: "Creative Commons Attribution 4.0 International",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img13.jpg",
    alt: "Image 13 description",
    description: "A calm river flowing through a dense forest at dawn.",
    camera: "Canon 6D",
    publishDate: "August 25, 2024",
    license: "Free for personal and commercial use",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img14.jpg",
    alt: "Image 14 description",
    description: "A silhouette of a person standing against the setting sun.",
    camera: "Nikon Z7 II",
    publishDate: "July 31, 2024",
    license: "Free to use under the Unsplash License",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img15.jpg",
    alt: "Image 15 description",
    description: "A colorful hot air balloon floating in the clear sky.",
    camera: "Sony A7R IV",
    publishDate: "September 15, 2024",
    license: "Royalty-free with attribution",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img16.jpg",
    alt: "Image 16 description",
    description: "A tranquil seascape with waves gently crashing on the shore.",
    camera: "Fujifilm X100V",
    publishDate: "August 10, 2024",
    license: "Creative Commons Attribution 4.0 International",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img17.jpg",
    alt: "Image 17 description",
    description: "A mountain range covered in a fresh layer of snow.",
    camera: "Canon EOS RP",
    publishDate: "October 1, 2024",
    license: "Free for personal and commercial use",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
  {
    src: "/src/assets/images/img18.jpg",
    alt: "Image 18 description",
    description: "A bird in flight over a vast open field during sunset.",
    camera: "Nikon D780",
    publishDate: "September 20, 2024",
    license: "Free to use under the Unsplash License",
    profile: {
      logo: placeholder,
      name: "Faisal Kashmire",
    },
  },
];

function Gallery() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BackgroundWrapper>
      <Navbar />
      <div className="pt-20 pb-5 md:mx-5 lg:mx-20 xl:mx-40 min-h-[94vh]">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            767: 2,
            900: 3,
          }}
        >
          <Masonry gutter="20px">
            {images.map((image, index) =>
              isMobile ? (
                <MobileScreenCard
                  key={index}
                  image={image} // Pass the entire image object
                  placeholder={placeholder}
                  onClickView={() => handleOpenModal(image)}
                />
              ) : (
                <LargeScreenCard
                  key={index}
                  image={image} // Pass the entire image object
                  placeholder={placeholder}
                  onClickView={() => handleOpenModal(image)}
                />
              )
            )}
          </Masonry>
        </ResponsiveMasonry>
        {selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            image={selectedImage} // Pass the entire image object
            onClose={handleCloseModal}
          />
        )}
      </div>
      <Footer />
    </BackgroundWrapper>
  );
}

export default Gallery;
