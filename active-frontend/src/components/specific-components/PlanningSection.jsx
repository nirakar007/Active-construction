import React from 'react'
import { useNavigate } from 'react-router-dom';

function PlanningSection() {
    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
      navigate(path);
    };
  return (
    <div>
        <div className="flex h-auto">
        <div className="flex h-auto justify-center">
          <div className="">
            <h2 className="bg-blue-50 py-5 px-2 font-thin text-3xl text-gray-700">
              Planning
            </h2>
            <div className='px-5'>
            <h1 className="pt-5 px-4 text-2xl w-[80%] text-blue-900">
            What sets us apart in Nepal's construction landscape?
            </h1>
            <p className="flex flex-wrap text-lg py-7 px-4 w-[60%]">
            Our dedication to uniqueness and efficient space management. Every space is a masterpiece in innovation.
            We don't just build, we redefine landscapes.
            </p>
           

            <button
              class="bg-blue-700 hover:bg-blue-600 hover:shadow-sm hover:shadow-lime-300 text-white font-bold p-4 mx-5 mt-10 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/planning")}
            >
              Learn More {">"}
            </button>
            </div>
          </div>
          <div className="w-[610px] h-[614px] object-fill items-center">
            <img
              src="https://images.adsttc.com/media/images/5a46/57a8/b22e/38b7/0700/0234/original/Fernando_De_Rossa___Virginia_Miguel.gif?1514559397"
              alt="img"
            />
          </div>
        </div>

        </div>
    </div>
  )
}

export default PlanningSection