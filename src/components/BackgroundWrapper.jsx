import React from "react";
import { useLocation } from "react-router-dom";

function BackgroundWrapper({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return <div></div>;
}

export default BackgroundWrapper;
