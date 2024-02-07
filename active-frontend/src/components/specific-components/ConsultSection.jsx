import React from 'react'
import { useNavigate } from 'react-router-dom';


function ConsultSection() {

    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
      navigate(path);
    };

  return (
    <div>
        <div className="flex h-auto justify-center">
          <div className="">
            <h2 className="bg-green-50 py-5 px-2 font-thin text-3xl text-gray-700">
              Consult
            </h2>
            <h1 className="pt-5 px-4 text-4xl font-semibold w-[80%] text-green-500">
              Big decisions?
            </h1>
            <p className="flex flex-wrap text-lg py-7 px-4 w-[55%]">
              You have come to the right place. We help with your problems
              backed by years of experience and hard work.
            </p>

            <button
              class="bg-green-600 hover:bg-green-500 hover:shadow-sm hover:shadow-lime-300 text-white font-bold p-4 mx-5 mt-10 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/consult")}
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

export default ConsultSection