import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ConsultH() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-7 font-jost">Consult</h1>
            <div className="flex gap-5 text-neutral-500 px-10">
              <h2
                className={`text-2xl ${
                  activeIndex === 0
                    ? "font-semibold animate-bounce text-orange-600"
                    : "font-light"
                }`}
              >
                Experienced,
              </h2>
              <h2
                className={`text-2xl ${
                  activeIndex === 1
                    ? "font-semibold animate-bounce text-sky-600"
                    : "font-light"
                }`}
              >
                Skilled,
              </h2>
              <h2
                className={`text-2xl ${
                  activeIndex === 2
                    ? "font-semibold animate-bounce text-yellow-600"
                    : "font-light"
                }`}
              >
                Enthusiastic.
              </h2>
            </div>

            <p className="text-green-800 mt-2">All the good parts.</p>
          </div>
        </div>
        <div
          className="mt-10 w-full h-auto border cursor-pointer object-cover mb-10 "
          onClick={() => handleLearnMoreClick("/consult")}
        >
          <img
            src="src/assets/images/consult.jpg"
            alt="image"
            className="w-[500px] transform transition-transform duration-500 ease-in-out hover:translate-z-50"
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultH;
