import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./textAnimate.css";
import ContactForm from "../components/specific-components/ContactForm";
import Footer from "../components/specific-components/Footer";
import Reveal from "../animation/Reveal";

function SurveyPlotPage() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  const flowingGradientVariants = {
    initial: { backgroundPosition: "100% 0%" },
    animate: {
      backgroundPosition: "0% 100%",
      transition: { repeat: 1, duration: .5, ease: "linear" },
    },
  };
  return (
    <div>
      <span className="flex justify-center">
        <h1 className="font-light">services/ </h1>
        <h1 className="text-lg">Survey&Plotting</h1>
      </span>
      <Reveal>
      <div className="flex justify-center my-10">
        <h1 className="font-jost text-4xl font-light textSurveyPlot">
          Precision in Every Plot, Insight in Every Survey
        </h1>
      </div>

      <div className="flex h-[70vh]">
        <div className="h-full w-[50%]">
          <div className="mt-24 mx-20">
            <h2 className="font-jost text-4xl">Plot</h2>
            <p className="text-lg text-neutral-600 mt-10">
              Experience accuracy redefined. Our meticulous site plotting sets
              the stage for construction excellence. Trust us to define your
              project's space with unrivaled precision.
            </p>
          </div>
        </div>
        <div className="w-[800px] p-10 overflow-hidden">
          <img
            src="src/assets/images/survey.jpg"
            alt="image"
            className="w-full transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110"
          />
        </div>
      </div>

      <div className="flex mt-28">
        <div className="w-[800px] p-10 overflow-hidden">
          <img
            src="src/assets/images/survey.jpg"
            alt="image"
            className="rounded-md w-full transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110"
          />
        </div>
        <div className="mt-24 mx-20">
          <h2 className="font-jost text-4xl">Survey</h2>
          <p className="text-lg text-neutral-600 mt-10">
            Informed decisions, guaranteed. Our cutting-edge surveying tools and
            techniques provide the insights you need for seamless project
            execution.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 justify-center my-24">
        <motion.h2
          variants={flowingGradientVariants}
          initial="initial"
          animate="animate"
          className="text-xl font-jost gradient-text"
        >
          Embrace for Precision, Achieve Excellence with Our Expertise
        </motion.h2>
        <p className="text-lg text-neutral-600 mt-16">
          Embark on your construction journey with confidence.
        </p>
        <p className="text-lg text-neutral-600">
          Explore our Plotting and Survey expertise for a foundation built on
          unparalleled accuracy and insight.
        </p>
      </div>
      </Reveal>
      <div className="flex justify-center">
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default SurveyPlotPage;
