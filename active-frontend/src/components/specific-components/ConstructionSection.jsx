import React from 'react'
import { useNavigate } from 'react-router-dom';


function ConstructionSection() {

    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
      navigate(path);
    };

  return (
    <div>
        <div className="flex mx-10 h-auto justify-center">
          <div className="">
            <h2 className="bg-sky-50 p-5 font-thin text-3xl text-gray-700">
              Construction
            </h2>
            <h1 className="pt-5 px-4 text-2xl w-[100%] text-sky-600">
              We do constructions too!
            </h1>
            <p className="flex flex-wrap text-lg py-7 px-4 w-[55%]">
             All in one.
            </p>

            <button
              class="bg-sky-600 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-300 text-white font-bold p-4 mx-5 mt-10 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/construction")}
            >
              Learn More {">"}
            </button>
          </div>
          <div className="w-[610px] h-[614px] object-fill items-center">
            <img
              src="https://www.binarycode.co.nz/wp-content/uploads/2023/02/SharePoint-Consulting.gif"
              alt="img"
            />
          </div>
        </div>
    </div>
  )
}

export default ConstructionSection