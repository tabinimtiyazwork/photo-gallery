import React from "react";

function Welcome() {
  return (
    <section
      className="relative flex items-center justify-start min-h-[calc(100vh-6vh)] w-full bg-cover bg-center bg-no-repeat pt-16" // Adjusted padding-top
      style={{
        backgroundImage: "url('/src/assets/b2.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 py-16 sm:px-20 lg:px-20 max-sm:text-center max-sm:items-center max-sm:justify-center max-sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main py-4 sm:py-6 md:py-8">
          Welcome to the Photo Gallery
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-text-muted mb-4 sm:mb-6 md:mb-8">
          Discover a curated collection of stunning images captured by
          passionate photographers.
        </p>
        <a
          href="/gallery"
          className="inline-block bg-button-primary md:hover:bg-button-hover text-text-main font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-7 rounded transition duration-300"
        >
          Explore the Gallery
        </a>
      </div>
    </section>
  );
}

export default Welcome;
