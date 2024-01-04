import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import WhyUs from "../pages/WhyUs";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/services", element:<Services />},
  { path: "/gallery", element:<Gallery />},
  { path: "/whyus", element:<WhyUs />},
  { path: "/contact", element:<Contact />},

];

export default function TheRouter() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
