import React from "react";
import { useNavigate } from "react-router-dom";


function DesignH() {
  const navigate = useNavigate();
  const handleClick = (path) =>{
    navigate(path);
  }
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center px-10">
          <h1 className="text-4xl font-medium mb-2 font-jost">Design</h1>
          <p className="flex flex-col items-center justify-center p-4 text-lg text-neutral-500 mb-5">
            The most innovative and efficient designs you'll see.
            <p className="text-sky-500">Designed for comfort.</p>
          </p>
          {/* image interior and exterior */}
          <div className="flex gap-4 w-full">
            <div className="relative w-full transform transition-transform duration-500 ease-out hover:translate-z-50 hover:scale-110">
              <img
                src="src/assets/banasthali_wip/exterior/7.jpg"
                alt="exterior"
                className="w-[400px] h-[400px] p-2 shadow"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity cursor-pointer"
                onClick={() => handleClick("/design")}
              >
                <span className="text-white text-3xl font-bold">Exterior</span>
              </div>
            </div>
            <div className="relative w-full transform transition-transform duration-500 ease-out hover:translate-z-50 hover:scale-110">
              <img
                src="src/assets/banasthali_wip/interior/10.jpg"
                alt="interior"
                className="w-[400px] h-[400px] p-2 shadow"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity cursor-pointer"
              onClick={() => handleClick("/design")}>
                <span className="text-white text-3xl font-bold z-20">
                  Interior
                </span>
                <span className="bg-black opacity-20 z-10"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignH;
