import React from "react";
import { useNavigate } from "react-router-dom";
import DesignSection from "../components/specific-components/DesignSection";
import ConsultSection from "../components/specific-components/ConsultSection";
import PlanningSection from "../components/specific-components/PlanningSection";
import SurveyPlottingSection from "../components/specific-components/SurveyPlottingSection";
import Footer from "../components/specific-components/Footer";
import ConstructionPage from "./ConstructionPage";
import ConstructionSection from "../components/specific-components/ConstructionSection";

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
              className="w-[1280px] h-[500px] object-cover rounded-l-md"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-20 justify-center">
        <div className="flex p-5 mb-10 border-b w-[50%] justify-center">
          <h1 className="font-light text-3xl ">Services</h1>
        </div>
      </div>

      <div className="flex flex-col gap-2 mx-28">

        {/* DESIGN */}
        <DesignSection />

        {/* CONSULT Section */}
        <ConsultSection />

        {/* Planning section  */}
        <PlanningSection />

        {/* Survey and Plotting section  */}
        <SurveyPlottingSection />

        {/* Construction section  */}
        <ConstructionSection />

      </div>
      <Footer />
    </>
  );
}

export default HomePage;
