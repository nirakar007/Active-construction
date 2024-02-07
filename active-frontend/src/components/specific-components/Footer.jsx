import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const handleLogoClick = () => {
    setActiveTab("");
    window.scrollTo(0, 0);
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
        <div className="flex p-1">
          <FaLocationDot className="text-sm mr-2" />
          <span className="text-xs font-semibold">
            Khusibun, Kathmandu, Nepal
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
