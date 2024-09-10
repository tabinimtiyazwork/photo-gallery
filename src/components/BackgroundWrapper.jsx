import React from "react";

function BackgroundWrapper({ children }) {
  return <div className="min-h-screen w-full bg-primary-bg">{children}</div>;
}

export default BackgroundWrapper;
