import React from "react";
import { useLocation } from "react-router-dom";

function BackgroundWrapper({ children }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${isHomePage ? "min-h-screen bg-cover bg-no-repeat" : ""}`}
      style={{
        backgroundImage: isHomePage
          ? "url('/src/assets/lens-background.webp')"
          : "none",
        backgroundPosition: "center",
        backgroundColor: isHomePage ? "#ffffff" : "transparent",
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundWrapper;
