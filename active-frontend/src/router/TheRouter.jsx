import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";

const routes = [
  { path: "/", element: <HomePage /> },
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
