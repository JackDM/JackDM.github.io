import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="text-center py-20">
    <motion.h1
      className="text-5xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-green-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Bienvenido a CVflow
    </motion.h1>
    <p className="mt-4 text-xl text-gray-400">Explora mis proyectos como si fueran niveles de un videojuego.</p>
  </section>
);

export default Hero;
