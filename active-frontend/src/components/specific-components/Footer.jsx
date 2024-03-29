import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    setActiveTab("");
  };
  return (
    <footer className="bg-customColor text-white p-4 text-center">
      <div className="flex justify-between">
        <img
          src="src/assets/logo/logo.svg"
          alt="logo"
          className="w-[50px] cursor-pointer"
          onClick={handleLogoClick}
        />
        <div className="flex flex-col p-1 gap-2">
          <span className="flex text-xs font-semibold">
          <FaLocationDot className="text-sm" />
            Khusibun, Kathmandu, Nepal
          </span>
          <span className="ml-20 font-semibold">
            <p className="text-xs">
              +977 9851096535  
            </p>
            <p className="text-xs">
              +977 9849096535  
            </p>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mb-2 gap-2">
        <FaRegRegistered className="text-sm mr-2" />
        <span className="text-xs font-semibold">
          Rights Reserved by Active Construction
        </span>
      </div>
      <p className="text-xs">
        © {new Date().getFullYear()} Active Construction. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
