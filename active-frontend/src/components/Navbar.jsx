import React, { useState } from "react";
import { navbarList } from "./data/navbarList";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import { services } from "./data/services";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [hoveredTab, setHoveredTab] = useState(null);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleTabClick = (title) => {
    const routes = {
      HomePage: "/",
      "Contact Us": "/contact",
      Gallery: "/gallery",
      Services: "/services",
      "About Us": "/aboutus",
      Login: "/login",
      Register: "/register",
      Design: "/design",
      Projects: "/projects",
      Consult: "/consult",
      Planning: "/planning",
      "Survey & Plot": "/surveyplot",
      Construction: "/construction",
      Ongoing: "/workinprogress",
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

  const handleAccountIconClick = () => {
    setAccountDropdownOpen(!isAccountDropdownOpen);
  };
  const handleTabHover = (title) => {
    setHoveredTab(title);
  };

  return (
    <div className="bg-gradient-to-b from-white to-white opacity-95 sticky top-0 z-50">
      <div className="flex mx-4 justify-between">
        <div className="flex">
          {/* Logo */}
          <div
            className="flex w-[100px] p-4 items-center"
            onClick={handleTabClick}
          >
            <Link to="/" onClick={handleLogoClick} className="relative">
              <img
                src="src/assets/logo/logo.svg"
                alt="Logo"
                className="w-[50px] pt-1"
              />
            </Link>
          </div>
        </div>

        {/* Responsive Burger Menu */}
        <div className="md:hidden pt-3">
          <button
            onClick={handleBurgerMenuClick}
            className="text-blue-900 focus:outline-none transition duration-200 ease-in-out"
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
        <div
          className={`hidden md:flex w-[50%] p-2 items-center justify-end mr-10 gap-10 ${
            isBurgerMenuOpen ? "hidden" : "block"
          }`}
        >
          {navbarList.map((item) => (
            <div
              key={item.title}
              className={`relative flex text-blue-900 items-center justify-between cursor-pointer ${
                activeTab === item.title
                  ? "font-medium text-md border-b-2 border-blue-400"
                  : "font-medium text-md"
              } hover:border-b-2 hover:border-blue-400 transition duration-100 ease-in-out justify-center py-4 m-1 `}
              onClick={() => handleTabClick(item.title)}
              onMouseEnter={() => handleTabHover(item.title)}
              onMouseLeave={() => handleTabHover(null)}
            >
              {item.title}
              {item.title === "Services" && hoveredTab === "Services" && (
                <div className="absolute mt-1 top-full left-0 w-[160px] bg-white p-2 rounded-md shadow-md">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="cursor-pointer flex flex-col items-center text-blue-900 text-md py-2 hover:font-semibold"
                      onClick={() => handleTabClick(service.title)}
                    >
                      {service.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Account Icon and Dropdown */}
          <div
            className="mx-3 relative cursor-pointer"
            onClick={handleAccountIconClick}
          >
            <BsPersonFill className="text-blue-900 h-6 w-6 hover:text-sky-500" />
            {isAccountDropdownOpen && (
              <div className="absolute top-10 right-0 w-[120px] bg-white p-2 rounded-md shadow-md">
                <div
                  className="flex flex-col items-center cursor-pointer text-blue-900 text-sm py-1 hover:font-semibold"
                  onClick={() => handleTabClick("Login")}
                >
                  Login
                </div>
                <div
                  className="flex flex-col items-center cursor-pointer text-blue-900 text-sm py-1 hover:font-semibold"
                  onClick={() => handleTabClick("Register")}
                >
                  Register
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Burger Menu Dropdown */}
        {isBurgerMenuOpen && (
          <div className="md:hidden absolute top-10 right-4 w-[200px] h-[60vh] bg-white p-4 rounded-md shadow-md">
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
      <div>
        <motion.div
          className="progress-bar h-1 bg-blue-500 fixed top-0 left-0 right-0 transform-origin-left z-90"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}

export default Navbar;
