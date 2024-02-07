import React, { useState, useEffect } from "react";

function ConsultH() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-10">Consult</h1>
            <div className="flex gap-5">
              <h2
                className={`text-2xl ${
                  activeIndex === 0 ? "font-semibold" : "font-light"
                }`}
                
              >
                Experienced,
              </h2>
              <h2
                className={`text-2xl ${
                  activeIndex === 1 ? "font-semibold" : "font-light"
                }`}
              >
                Skilled,
              </h2>
              <h2
                className={`text-2xl ${
                  activeIndex === 2 ? "font-semibold" : "font-light"
                }`}
              >
                Enthusiastic.
              </h2>
            </div>

            <p className="font-medium text-2xl text-green-500 mt-6">
              Only the good parts.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full h-[50vh] border"></div>
      </div>
    </div>
  );
}

export default ConsultH;
