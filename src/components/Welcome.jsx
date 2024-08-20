import React from "react";

function Welcome() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat z-0"
      style={{
        backgroundImage: "url('/src/assets/lens-background.webp')",
        backgroundPosition: "right",
        backgroundColor: "#fff", // in case the image doesn't load, fallback to white
      }}
    ></div>
  );
}

export default Welcome;
