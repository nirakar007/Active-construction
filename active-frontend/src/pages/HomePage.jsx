import React from "react";

function HomePage() {
  return (
    <>
      {/* section 1 */}
      <div className="flex border-8 border-red-500">
        {/* <img
          src="src/assets/images/gradientRec.jpg"
          alt="gradient"
          className="h-full w-[2%] z-50"
        /> */}

        <div className="flex mx-10 py-20">

          {/* hero section description */}
          <div className="flex flex-col px-10 space-y-10">
          <h1 className="text-blue-900 text-4xl sm:text-md">Have a complicated land structure?</h1>
          <p className="text-lg flex flex-wrap w-[50%]">
            we make the best of spaces of any shape and size on any kind of
            land.
          </p>
          </div>
        </div>
        <div class="relative overflow-hidden h-500">
          {/* image hero section */}
          <div class="flex justify-end rounded-lg transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110">
            <img
              src="src/assets/images/office.jpg"
              alt="image"
              class="w-[960px] h-[500px] object-cover border-4 border-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="flex border-8 h-[70vh]">
        <div className="flex items-center overflow-hidden border-8 border-blue-500 w-[35%]">
          <h1 className="text-4xl hover:opacity-30 h-10 cursor-pointer px-2 z-10">
            Design
          </h1>
          <img
            src="https://images.adsttc.com/media/images/5891/9d44/e58e/ce09/9300/0074/original/www.GIFCreator.me_vrZ1SP.gif?1485937983"
            alt="your-gif"
            class="w-full h-full object-cover opacity-0 hover:opacity-100"
          />
        </div>
        <div className="border-8 border-green-500 w-[35%]"></div>
        <div className="border-8 border-yellow-500 w-[35%]"></div>
      </div>
    </>
  );
}

export default HomePage;
