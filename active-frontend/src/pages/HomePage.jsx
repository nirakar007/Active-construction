import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* section 1 */}
      <div className="flex">
        <div className="flex mx-24 p-20">
          {/* hero section description */}
          <div className="flex flex-col  space-y-10">
            <h1 className="text-blue-900 text-4xl sm:text-md">
              Have a complicated land structure?
            </h1>
            <p className="text-lg flex flex-wrap w-[70%]">
              We're really good at making the most out of tricky-shaped spaces,
              no matter what kind of land it is.
            </p>
            <button class="w-32 bg-blue-900 hover:bg-blue-800 hover:shadow-sm hover:shadow-cyan-500 text-white font-bold p-4 mt-4 rounded-md transition duration-200 ease-in-out">
              Learn More
              {/* direct to gallery, a section specifically made for the complicated designs to standout */}
            </button>
          </div>
        </div>
        <div class="relative overflow-hidden h-500">
          {/* image hero section */}
          <div class="flex justify-end rounded-lg transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110">
            <img
              src="src/assets/images/office.jpg"
              alt="image"
              class="w-[1280px] h-[500px] object-cover rounded-l-md"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
      <div className="flex p-10 mb-10 border-b w-[50%] justify-center">
        <h1 className="font-medium text-3xl opacity-75">Services</h1>
      </div>
      </div>

      <div className="mx-28">

        {/* DESIGN section______________________________________________________________________________________________________________ */}

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
              class="bg-cyan-500 hover:bg-cyan-400 hover:shadow-sm hover:shadow-teal-300 text-white font-bold p-4 mx-5 mt-4 rounded-md transition duration-100 ease-in-out"
              onClick={() => handleLearnMoreClick("/design")}
            >
              Learn More
            </button>
          </div>
          <div className="w-[610px] h-[614px] object-fill items-center">
            <img
              src="https://images.adsttc.com/media/images/5a46/57a8/b22e/38b7/0700/0234/original/Fernando_De_Rossa___Virginia_Miguel.gif?1514559397"
              alt="img"
            />
          </div>
        </div>

        {/* CONSULT Section _____________________________________________________________________________________________________*/}

        <div className="flex mx-10 h-auto justify-center">
          <div className="">
            <h2 className="bg-green-50 p-5 font-thin text-3xl text-gray-700">
              Consult
            </h2>
            <h1 className="pt-5 px-4 text-2xl w-[80%] text-lime-600">
              Having trouble in making big decisions?
            </h1>
            <p className="flex flex-wrap text-lg py-7 px-4 w-[55%]">
              You have come to the right place. We help with your problems
              backed by years of experience and hard work.
            </p>

            <button
              class="bg-green-600 hover:bg-green-500 hover:shadow-sm hover:shadow-lime-300 text-white font-bold p-4 mx-5 mt-4 rounded-md transition duration-100 ease-in-out"
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

        {/* Planning section  _____________________________________________________________________________________________________*/}
        <div className="flex border-4 h-[100vh]">
          
        </div>
        <div className="flex border-4 h-[100vh]"></div>
      </div>
    </>
  );
}

export default HomePage;
