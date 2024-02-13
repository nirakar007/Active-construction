import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/specific-components/Footer";
import DesignH from "../components/specific-components/homepage-components/DesignH";
import Carousel from "../components/sharedComponents/Carousel";
import images from "../components/data/wip_sliderImgs";
import HeroSection from "../components/specific-components/homepage-components/HeroSection";
import ConsultH from "../components/specific-components/homepage-components/ConsultH";
import PlanningH from "../components/specific-components/homepage-components/PlanningH";
import SurveyPlotH from "../components/specific-components/homepage-components/SurveyPlotH";
import ConstructionH from "../components/specific-components/homepage-components/ConstructionH";
import Reveal from "../animation/Reveal";

function HomePage() {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* section 1 */}
      <Reveal>
      <div className="flex flex-col">
        <HeroSection />
      </div>
      </Reveal>

      {/* Current projects */}
      <div className="flex justify-center font-medium text-xl h-auto mt-10">
        <div className="flex">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <h1 className="text-2xl mb-4 font-jost">Ongoing Projects:</h1>
            <Carousel images={images} />
          </div>
          <div>
            <button
              onClick={() => handleLearnMoreClick("/workinprogress")}
              className="text-blue-900 hover:bg-blue-500 hover:shadow-sm hover:shadow-cyan-500 hover:text-white font-bold p-4 mt-12 transition duration-200 ease-in-out"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-20 justify-center">
        <div className="flex p-5 mb-10 border-b w-[50%] justify-center">
          <h1 className="font-light font-jost text-xl opacity-80">Services</h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* DESIGN */}
        <div className="">
          <DesignH />
        </div>

        {/* CONSULT Section */}
        <div className="font-bold text-xl mt-20">
          <ConsultH />
        </div>

        {/* Planning section  */}
        <div className="font-bold text-xl mt-20">
          <PlanningH />
        </div>

        {/* Survey and Plotting section  */}
        <div className="font-bold text-xl mt-20">
          <SurveyPlotH/>
        </div>

        {/* Construction section  */}
        <div className="font-bold text-xl mt-20">
          <ConstructionH />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
