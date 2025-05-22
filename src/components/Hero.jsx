import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="text-center py-20 relative">
    <canvas id="particles-bg"></canvas>
    <motion.h1
      className="text-5xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-green-400 drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Bienvenido a CVflow
    </motion.h1>
    <p className="mt-4 text-xl text-gray-300 drop-shadow">Explora mis proyectos como si fueran niveles de un videojuego.</p>
  </section>
);

export default Hero;
