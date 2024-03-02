import React, { useEffect } from "react";
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
import ContactForm from "../components/specific-components/ContactForm";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

      <Reveal>
        <div className="flex mt-20 justify-center">
          <div className="flex p-5 mb-10 border-b w-[50%] justify-center">
            <h1 className="font-light font-jost text-xl opacity-80">
              Services
            </h1>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col gap-16 items-center">
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
            <SurveyPlotH />
          </div>

          {/* Construction section  */}
          <div className="font-bold text-xl mt-20">
            <ConstructionH />
          </div>
        </div>
      </Reveal>

      {/* Current projects */}
      <div className="flex justify-evenly font-medium text-xl h-auto mt-10 p-10">
        <div className="flex ">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <h1 className="text-2xl mb-10 font-jost animate-bounce">
              Ongoing Projects:
            </h1>
            <Carousel images={images} />
          </div>
          <div>
            <button
              onClick={() => handleLearnMoreClick("/workinprogress")}
              className="text-blue-900 hover:bg-sky-500 hover:shadow-sm hover:shadow-cyan-500 hover:text-white p-4 mt-16 transition duration-200 ease-in-out rounded-sm"
            >
              <h1 className="font-jost">View All</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
