import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: { opacity: 0, scale: 0.8, y: -60 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.2
    }
  }
};

const subtitleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8 }
  }
};

const Hero = () => (
  <section className="text-center py-24 relative z-10">
    <motion.h1
      className="text-6xl md:text-7xl font-extrabold modern-title drop-shadow-xl"
      variants={titleVariants}
      initial="initial"
      animate="animate"
    >
      <span className="rainbow-gradient">CVflow</span>
    </motion.h1>
    <motion.p
      className="mt-6 text-2xl md:text-3xl font-medium text-gradient-2 drop-shadow-lg"
      variants={subtitleVariants}
      initial="initial"
      animate="animate"
    >
      Explora mis proyectos como si fueran <span className="font-bold">niveles de un videojuego</span>.
    </motion.p>
  </section>
);

export default Hero;
