import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundWrapper from "../components/BackgroundWrapper";

function NotFound() {
  return (
    <>
      <BackgroundWrapper>
        <Navbar />
        <div className="flex justify-center items-center py-10 pt-16 min-h-[95vh]">
          <h1 className="text-3xl font-thin text-center text-white mb-8">
            Page Not Found
          </h1>
        </div>
        <Footer />
      </BackgroundWrapper>
    </>
  );
}

export default NotFound;
