import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import NotFound from "./pages/NotFound.jsx";
import Social from "./pages/Social.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  { path: "about", element: <About /> },
  { path: "gallery", element: <Gallery /> },
  { path: "social", element: <Social /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
