import React from 'react'
import { useNavigate } from 'react-router-dom';


function ConstructionSection() {

    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
      navigate(path);
    };

  return (
    <div>
        <div className="flex  h-auto justify-center">
          <div className="w-[100%]">
            <h2 className="bg-sky-50 w-[100%] py-5 px-2 font-thin text-3xl text-gray-700">
              Construction
            </h2>
            <div className='px-5'>
            <h1 className="pt-5 text-2xl w-[100%] text-sky-600">
              We do constructions too!
            </h1>
            <p className="flex flex-wrap text-lg font-bold py-7 w-[55%]">
             All in one.
            </p>
            <p>From material supply to foundation setting to interior and exterior, we do it all.</p>

            <button
              class="bg-sky-600 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-300 text-white font-bold p-4 mt-10 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/construction")}
            >
              Learn More {">"}
            </button>
            </div>  
          </div>
          <div className="w-[610px] h-[614px] object-fill items-center">
            <img
              src="https://i.pinimg.com/originals/c9/ef/4d/c9ef4d8eea3b9ae322c0163480be7c7c.gif"
              alt="img"
            />
          </div>
        </div>
    </div>
  )
}

export default ConstructionSection