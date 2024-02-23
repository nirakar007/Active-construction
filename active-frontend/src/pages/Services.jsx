import React from 'react'
import DesignSection from "../components/specific-components/DesignSection";
import ConsultSection from "../components/specific-components/ConsultSection";
import PlanningSection from "../components/specific-components/PlanningSection";
import SurveyPlottingSection from "../components/specific-components/SurveyPlottingSection";
import ConstructionSection from '../components/specific-components/ConstructionSection';
import Footer from "../components/specific-components/Footer";
import Reveal from '../animation/Reveal';


function Services() {
  return (
    <div>
      {/* <div className="h-[10vh] w-full border-2"></div> */}
      {/* try to Make the images in them float */}
          <Reveal>
        <div className="flex flex-col gap-2 mx-28 mt-16">
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
          </Reveal>
        <Footer />
    </div>
  )
}

export default Services