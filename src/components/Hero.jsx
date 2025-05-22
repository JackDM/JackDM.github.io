import React from "react";
import { motion } from "framer-motion";

const gradientColors = [
  "#a18cd1", "#fbc2eb", "#43e97b", "#38f9d7", "#fa8bff", "#2bd2ff", "#2bff88"
];

const titleVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -8 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4
    }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    textShadow: "0 0 32px #fff, 0 0 64px #a18cd1"
  }
};

const Hero = () => (
  <section className="text-center py-20 relative z-10">
    <motion.h1
      className="text-6xl md:text-7xl font-extrabold modern-title mb-6"
      variants={titleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      style={{
        background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      <span style={{
        display: "inline-block",
        filter: "drop-shadow(0 2px 16px #43e97b) drop-shadow(0 0 32px #a18cd1)"
      }}>
        Explora mis proyectos<br />
        <span className="block text-3xl md:text-4xl font-bold mt-2" style={{
          background: "linear-gradient(90deg, #fa8bff, #2bd2ff, #2bff88)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          como si fueran niveles de un videojuego
        </span>
      </span>
    </motion.h1>
    <motion.p
      className="mt-6 text-xl md:text-2xl text-gray-200 font-medium drop-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 1 }}
    >
      ¡Desbloquea logros explorando cada proyecto!
    </motion.p>
  </section>
);

export default Hero;
