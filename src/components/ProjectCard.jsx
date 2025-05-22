import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, image, github }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    className="bg-gradient-to-br from-purple-800 to-green-600 p-4 rounded-2xl shadow-lg transition-all"
  >
    <img src={image} alt={title} className="rounded-xl mb-4 h-48 object-cover w-full" />
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm text-gray-200">{description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {tech.map((t, i) => (
        <span key={i} className="bg-black bg-opacity-30 px-2 py-1 rounded text-xs">{t}</span>
      ))}
    </div>
    <a href={github} className="block mt-4 text-sm underline text-white" target="_blank">Ver en GitHub</a>
  </motion.div>
);

export default ProjectCard;
