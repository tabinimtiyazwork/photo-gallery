import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className=" box-border py-2 bg-footer-bg text-gray-600 flex items-center justify-center w-full min-h-[6vh]">
      <p className="text-sm text-center">
        &copy; {currentYear}. Coded by Tabin
      </p>
    </footer>
  );
}

export default Footer;
