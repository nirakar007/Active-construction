import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("v");
            slideControls.start("v");
        }
    }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative",}}>
      <motion.div
      variants={{
        u: {opacity: 0, y: 75},
        v: {opacity: 1, y: 0},
      }}
      ref={ref}
      initial="u"
      animate="v"
      transition={{duration: 0.75, delay: 0.25}}
      >{children}
      </motion.div>
    </div>
  );
};

export default Reveal;
