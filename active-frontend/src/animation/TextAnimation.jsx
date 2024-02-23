
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextAnimation = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.10 }}
      animate={controls}
      transition={{ duration: 0.9 }}
    >
      <h2 className="text-4xl font-jost textBoink animate-bounce">
        {text}
      </h2>
    </motion.div>
  );
};

export default TextAnimation;