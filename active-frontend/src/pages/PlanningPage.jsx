import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./textAnimate.css";
import Footer from "../components/specific-components/Footer";
import ContactForm from "../components/specific-components/ContactForm";
import ImageGrid from "../components/sharedComponents/ImageGrid";
import Reveal from "../animation/Reveal";

function PlanningPage() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  const flowingGradientVariants = {
    initial: { backgroundPosition: "100% 0%" },
    animate: {
      backgroundPosition: "0% 100%",
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    },
  };
  return (
    <div>
      <div className="flex justify-center mb-5">
        <h1 className="font-light">services/ </h1>
        <h1 className="text-lg">Planning</h1>
      </div>
      <Reveal>
        <div>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-3xl font-jost textPlan">
              Efficiency in Every Detail
            </h1>
            <span className="flex flex-col items-center mt-4 text-base leading-7 ">
              <p className="text-neutral-600">
                Optimize resources, time, and costs with our meticulous project
                planning.
              </p>
              <p className="text-neutral-600">
                {" "}
                We ensure a streamlined construction journey, marked by
                efficiency and excellence.
              </p>
              <p className="text-neutral-600">stunning and livable.</p>
            </span>
          </div>
        </div>

        <div className="flex justify-center h-[500px] mt-5">
          <div className="flex shadow justify-center items-center w-[50%]">
            <img src="src/assets/images/plan.jpg" alt="img" className="w-[600px] transform transition-transform duration-500 ease-in-out hover:translate-z-50 hover:scale-110" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <div className="p-16 shadow hover:shadow-lg rounded-md mt-16 hover:scale-105 transition duration-200">
            <h1 className="font-jost text-2xl">Precision Planning:</h1>
            <p className="text-neutral-500 mt-3">
              Utilize cutting-edge technology and
            </p>
            <p className="text-neutral-500 mt-1">
              creativity for detailed project plans.
            </p>
          </div>

          <div className="p-16 shadow hover:shadow-lg rounded-md mt-16 hover:scale-105 transition duration-200">
            <h1 className="font-jost text-2xl">Resource Optimization:</h1>
            <p className="text-neutral-500 mt-3">
              Maximize efficiency in every phase of
            </p>
            <p className="text-neutral-500 mt-1">your construction project.</p>
          </div>

          <div className="p-16 shadow hover:shadow-lg rounded-md mt-16 hover:scale-105 transition duration-200">
            <h1 className="font-jost text-2xl">Cost-Effective Solutions:</h1>
            <p className="text-neutral-500 mt-3">
              Our planning strategies ensure cost-effectiveness
            </p>
            <p className="text-neutral-500 mt-1">
              {" "}
              without compromising quality.
            </p>
          </div>

          <div className="flex justify-center my-28">
            <motion.h2
              variants={flowingGradientVariants}
              initial="initial"
              animate="animate"
              className="text-2xl font-jost gradient-text"
            >
              Choose us for a construction journey backed by strategic insight
              and expert advice.
            </motion.h2>
          </div>
        </div>
      </Reveal>
      <div className="flex justify-center">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default PlanningPage;
