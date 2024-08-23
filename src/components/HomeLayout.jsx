import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
function Header() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Welcome />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Header;
