import React from 'react'
import { useNavigate } from 'react-router-dom';

function DesignSection() {

    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
      navigate(path);
    };
  return (
    <div>
        
        <div className="flex h-auto justify-center">
          <div className="">
            <h2 className="bg-yellow-50 p-5 font-thin text-3xl text-gray-700">
              Design
            </h2>
            <h1 className="pt-5 px-4 text-3xl">Both</h1>
            <h1 className="pt-3 px-4 text-5xl font-semibold text-cyan-500">
              Interior
            </h1>
            <h1 className="text-3xl px-4">&</h1>
            <h1 className="text-5xl px-4 font-semibold">Exterior</h1>
            <p className="flex flex-wrap text-lg py-7 px-4 w-[60%]">
              We excel in the most efficient and yet the most unique designs
              ever seen.
            </p>

            <button
              class="bg-cyan-500 hover:bg-cyan-400 hover:shadow-sm hover:shadow-teal-300 text-white font-bold p-4 mx-5 mt-10 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/design")}
            >
              Learn More
            </button>
          </div>
          <div className="w-[610px] h-[614px] object-fill items-center">
            <img
              src="https://i.pinimg.com/originals/8a/bf/df/8abfdf187a6d4a0397eb85e5380eddcf.gif"
              alt="img"
            />
          </div>
        </div>
    </div>
  )
}

export default DesignSection