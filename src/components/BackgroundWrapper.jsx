import React from "react";

function BackgroundWrapper({ children }) {
  return <div className="min-h-screen w-full bg-bg-color">{children}</div>;
}

export default BackgroundWrapper;
