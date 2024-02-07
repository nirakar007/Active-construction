import React from 'react';
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  return (
    <div>
        <div className="flex mx-12 py-20 gap-28">
          {/* hero section description */}
          <div className="flex flex-col space-y-10 px-20">
            <h1 className="text-blue-900 text-4xl sm:text-md">
              Have a complicated land structure?
            </h1>
            <p className="text-lg flex flex-wrap w-[70%]">
              We're really good at making the most out of tricky-shaped spaces,
              no matter what kind of land it is.
            </p>
            <button class="w-32 bg-blue-900 hover:bg-blue-800 hover:shadow-sm hover:shadow-cyan-500 text-white font-bold p-4 mt-4 rounded-md transition duration-200 ease-in-out" 
            onClick={() => {handleLearnMoreClick("/contact")}}>
              Learn More
              {/* direct to gallery, a section specifically made for the complicated designs to standout */}
            </button>
          </div>
          <div class="relative">
            {/* image hero section */}
            <div class="flex justify-end rounded-lg transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110">
              <img
                src="src/assets/images/office.jpg"
                alt="image"
                className="w-[1280px] h-[500px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection