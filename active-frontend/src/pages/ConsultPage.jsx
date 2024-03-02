import React, {useEffect} from "react";
import gifs from "../components/data/gifs";
import Footer from "../components/specific-components/Footer";
import Reveal from "../animation/Reveal";
import { motion } from "framer-motion";
import "./textAnimate.css";
import ContactForm from "../components/specific-components/ContactForm";



function ConsultPage() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const desiredKey = "consult";

  const desiredGif = gifs.find((gif) => gif.id === desiredKey);

  const flowingGradientVariants = {
    initial: { backgroundPosition: "100% 0%" },
    animate: {
      backgroundPosition: "0% 100%",
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    },
  };

  return (
    <div className="main">
      <Reveal>
        <span className="flex justify-center">
          <h1 className="font-light">services/ </h1>
          <h1 className="text-lg">Consult</h1>
        </span>
        <div className="flex justify-center mb-20">
          <span className="flex flex-col items-center mt-7 leading-9 p-2">
            <h1 className="font-jost text-3xl textConsult">
              Strategic Guidance with us.
            </h1>
            <p className="mt-4 justify-center text-neutral-600">
              Navigate complexities with our strategic guidance. From
              feasibility studies to budgeting,
            </p>
            <p className="text-neutral-600">
              we ensure informed decision-making for project success.
            </p>
            <p className="text-neutral-600">
              We are mostly based on our physical location, better consultation and interaction. 
            </p>
            <p className="text-neutral-600 font-semibold">
                Visit us anytime!
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-24 justify-center items-center mt-4">
          <Reveal>
            <span className=" flex flex-col z-0 items-center p-10 shadow hover:shadow-lg rounded-md hover:scale-105 transition duration-200">
              <h1 className="font-jost text-2xl font-light">Expert Advice:</h1>
              <p className="mt-2 text-lg items-center text-neutral-500 w-[300px]">
                Benefit from seasoned professionals guiding your project.
              </p>
            </span>
          </Reveal>

          <Reveal>
            <span className="flex flex-col z-0 items-center p-10 shadow hover:shadow-lg rounded-md hover:scale-105 transition duration-200">
              <h1 className="font-jost text-2xl font-light">
                Feasibility Studies:
              </h1>
              <p className="mt-4 text-lg items-center text-neutral-500 w-[300px]">
                Assess project viability with thorough studies.
              </p>
            </span>
          </Reveal>

          <Reveal>
            <span className=" flex flex-col z-0 items-center p-10 shadow hover:shadow-lg rounded-md hover scale-105 transition duration-200">
              <h1 className="font-jost text-2xl font-light">
                Budgeting Support:
              </h1>
              <p className="mt-4 text-lg items-center text-neutral-500 w-[300px]">
                Plan confidently with our financial expertise.
              </p>
            </span>
          </Reveal>
        </div>
        /
        <div className="flex justify-center my-32">
          <motion.h2
            variants={flowingGradientVariants}
            initial="initial"
            animate="animate"
            className="text-2xl font-jost gradient-text"
          >
            Choose us for a construction journey backed by strategic insight and
            expert advice.
          </motion.h2>
        </div>
        <figure className="absolute top-[300px] left-[1000px] flex justify-evenly z-0 -mt-2">
          {desiredGif && (
            <img
              key={desiredGif.id}
              src={desiredGif.url}
              alt={desiredGif.id}
              className="w-[350px] h-auto"
            />
          )}
        </figure>
      </Reveal>
      <div className="flex justify-center">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default ConsultPage;
