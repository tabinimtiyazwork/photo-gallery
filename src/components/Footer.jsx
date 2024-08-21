import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-footer-bg-3  text-gray-600 py-3 flex items-center justify-center">
      <p className="text-sm text-center">
        &copy; {currentYear}. Coded by Tabin
      </p>
    </footer>
  );
}

export default Footer;
