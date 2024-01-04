import React, { useState } from "react";
import { navbarList } from "./data/navbarList";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isburgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    const routes = {
      HomePage: "/",
      Contact: "/contact",
      Gallery: "/gallery",
      Services: "/services",
      WhyUs: "/whyus",
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
  // const handleBurgerMenuClick = () =>{
  //   setBurgerMenuOpen(!isburgerMenuOpen);
  // }

  return (
    <div className="bg-gradient-to-b from-blue-200">
      <div className="flex m-4 justify-between ">
        <div className="flex items-center hover:shadow-lg hover:shadow-blue-300">
          {/* Logos */}
          <div
            className="flex w-[100px] mx-5 items-center"
            onClick={handleTabClick}
          >
            <Link to="/" onClick={handleLogoClick} className="relative">
              <img src="src/assets/constructionLogo.png" alt="Logo" />
            </Link>
          </div>
        </div>

        {/* elements */}
        <div className="flex w-[40%] p-2 items-center ">
          {navbarList.map((item) => (
            <div
              key={item.title}
              className={`flex text-blue-900 items-center w-full cursor-pointer ${
                activeTab == item.title
                  ? "font-semibold text-lg"
                  : "font-normal text-lg"
              } hover:font-semibold hover:shadow-blue-300 py-4 m-2`}
              onClick={() => handleTabClick(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
