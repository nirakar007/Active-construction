import React, { useState } from "react";
import { navbarList } from "./data/navbarList";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    const routes = {
      HomePage: "/",
      Contact: "/contact",
      Gallery: "/gallery",
      Services: "/services",
      "AboutUs": "/whyus",
    };
    if (routes[title]) {
      navigate(routes[title]);
      setBurgerMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    setActiveTab("");
    navigate("/");
  };

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-white to-white opacity-95 sticky top-0 z-50">
      <div className="flex m-4 justify-between">
        <div className="flex">
          {/* Logo */}
          <div className="flex w-[100px] mx-5 items-center" onClick={handleTabClick}>
            <Link to="/" onClick={handleLogoClick} className="relative">
              <img src="src/assets/logo/logo.svg" alt="Logo" className="w-auto h-auto"/>
            </Link>

          </div>
        </div>

        {/* Responsive Burger Menu */}
        <div className="md:hidden">
          <button
            onClick={handleBurgerMenuClick}
            className="text-blue-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Elements */}
        <div className={`hidden md:flex w-[40%] p-2 items-center ${isBurgerMenuOpen ? 'hidden' : 'block'}`}>
          {navbarList.map((item) => (
            <div
              key={item.title}
              className={`flex text-blue-900 items-center w-full cursor-pointer ${
                activeTab === item.title
                  ? "font-medium text-lg focus:border-b-2 focus:border-blue-400"
                  : "font-medium text-lg"
              } hover:border-b-2 hover:border-blue-400 transition duration-100 ease-in-out justify-center py-4 m-1 `}
              onClick={() => handleTabClick(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Burger Menu Dropdown */}
        {isBurgerMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 w-[200px] h-[60vh] bg-white p-4 rounded-md shadow-md">
            {navbarList.map((item) => (
              <div
                key={item.title}
                className="cursor-pointer text-blue-900 text-lg py-2 hover:font-semibold"
                onClick={() => handleTabClick(item.title)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
